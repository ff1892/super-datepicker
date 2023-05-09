import { ChangeEvent, useState } from 'react';
import dateMath from '@elastic/datemath';
import { CustomInputNum } from '../../../shared/customInputNum';
import { CustomSelect } from '../../../shared/customSelect';
import { TimeUnit } from '../../constants/common';
import { TimeOutput } from '../timeOutput';
import { useEscapeEvent } from '../../hooks/useEscapeEvent';
import { useStore } from '../../hooks/useStore';
import { Action } from '../../store/actions';
import { DateMode } from '../../store/state';
import styles from './relativePanel.module.scss';
import { useDate } from '../../hooks/useDate';
import { getUnit } from '../../utils/getUnit';

const selectOptionsAgo = Object.values(TimeUnit).map((unit) => (
  { value: `now-~${unit[0]}`, text: `${unit.toLowerCase()} ago` }
));

const selectOptionsFromNow = Object.values(TimeUnit).map((unit) => (
  { value: `now+~${unit[0]}`, text: `${unit} from now` }
));

const defaultUnit = 'now-~s';

function RelativePanel() {

  const date = useDate();
  const { dispatch } = useStore();

  const [unit, setUnit] = useState(defaultUnit);
  const [unitCount, setUnitCount] = useState(0);
  const [notRoundedDate, setNotRoundedDate] = useState(date);

  const shortUnit = unit[unit.length - 1];
  const roundUnit = getUnit(shortUnit).toLowerCase().slice(0, -1);

  const handleCalendarEscape = () => {
    dispatch({ type: Action.ClosePopover });
    dispatch({
      type: Action.ChangeDateMode,
      payload: DateMode.None,
    });
  };

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setUnit(e.currentTarget.value);
    const relativeStr = e.target.value.replace('~', `${unitCount}`);
    const moment = dateMath.parse(relativeStr)?.toDate() || date;
    setNotRoundedDate(moment);
    dispatch({
      type: Action.ChangeTime,
      payload: moment,
    });
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUnitCount(Number(e.currentTarget.value));
    const relativeStr = unit.replace('~', `${e.currentTarget.value}`);
    const moment = dateMath.parse(relativeStr)?.toDate() || date;
    setNotRoundedDate(moment);
    dispatch({
      type: Action.ChangeTime,
      payload: moment,
    });
  };

  const handleRoundChange = (e: ChangeEvent<HTMLInputElement>) => {
    const relStr = unit.replace('~', `${unitCount}`);
    const moment = e.target.checked
      // eslint-disable-next-line no-undef
      ? dateMath.parse(relStr)?.startOf(shortUnit as moment.unitOfTime.StartOf).toDate()
      : notRoundedDate;
    if (moment) {
      dispatch({
        type: Action.ChangeTime,
        payload: moment,
      });
    }
  };

  useEscapeEvent(handleCalendarEscape);

  return (
    <>
      <div className={styles.inputWrapper}>
        <CustomInputNum
          ariaText='Time span amount'
          defaultValue={0}
          onChange={handleInputChange}
        />
        <CustomSelect
          ariaText='Relative time span'
          name='relative-time-span'
          options={[...selectOptionsAgo, ...selectOptionsFromNow]}
          onChange={handleSelectChange}
        />
      </div>
      <div>
        <label className={styles.round}>
          <input
            type='checkbox'
            name='round'
            className={styles.checkbox}
            onChange={handleRoundChange}
          />
          {`Round to the ${roundUnit}`}
        </label>
      </div>
      <TimeOutput />
    </>
  );
}

export { RelativePanel };
