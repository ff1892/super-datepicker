import { FormEvent } from 'react';
import { TimeUnit } from '../../constants/common';
import styles from './quickSelectSection.module.scss';
import IconChevron from '../../../../../static/icons/chevron.svg';
import { CustomSelect } from '../../../shared/customSelect/CustomSelect';
import { CustomInputNum } from '../../../shared/customInputNum';
import { CustomButton } from '../../../shared/customButton';
import { getQuickTimeRange } from '../../utils/getQuickTimeRange';
import { useStore } from '../../hooks/useStore';
import { Action } from '../../store/actions';

const timeTenseProps = {
  name: 'timeTense',
  ariaText: 'Time tense',
  defaultValue: 'next',
  options: [
    { value: 'Next', text: 'Next' },
    { value: 'Last', text: 'Last' },
  ],
  lowerCase: false,
};

const timeUnitProps = {
  name: 'timeUnit',
  ariaText: 'time-unit',
  defaultValue: TimeUnit.Minutes,
  options: Object.values(TimeUnit).map((unit) => ({ value: unit, text: unit })),
};

function QuickSelectSection() {

  const { dispatch } = useStore();

  const handleFormSumbit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const [tense, unit, count] = [
      e.currentTarget.timeTense.value,
      e.currentTarget.timeUnit.value,
      e.currentTarget.unitsCount.value] as string[];
    const prettyLabel = `${tense} ${count} ${unit}`;
    const [start, end] = getQuickTimeRange({ timeTense: tense, timeCount: count, timeUnits: unit });

    dispatch({
      type: Action.SetPrettyLabel,
      payload: prettyLabel,
    });
    dispatch({
      type: Action.SetStartTime,
      payload: start,
    });
    dispatch({
      type: Action.SetEndTime,
      payload: end,
    });
    dispatch({ type: Action.CloseQuickSelection });
  };

  return (
    <>
      <div className={styles.quickSelectTitleWrapper}>
        <span className={styles.quickSelectTitle}>quick select</span>
        <div className={styles.quickSelectButtonWrapper}>
          <button
            className={styles.quickSelectButton}
            type='button'
            aria-label='Previous time window'
          >
            <IconChevron
              className={`${styles.quickSelectIcon} ${styles.rotatedIcon}`}
              aria-hidden
              focusable={false}
            />
          </button>
          <button
            className={styles.quickSelectButton}
            type='button'
            aria-label='Next time window'
          >
            <IconChevron
              className={styles.quickSelectIcon}
              aria-hidden
              focusable={false}
            />
          </button>
        </div>
      </div>
      <form
        className={styles.quickSelectForm}
        onSubmit={handleFormSumbit}
      >
        <CustomSelect {...timeTenseProps} />
        <CustomInputNum name='unitsCount' ariaText='Time value' defaultValue={15} />
        <CustomSelect {...timeUnitProps} />
        <CustomButton type='submit' text='Apply' />
      </form>
    </>
  );
}

export { QuickSelectSection };
