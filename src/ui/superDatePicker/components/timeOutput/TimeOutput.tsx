import {
  useRef, useState, FormEvent, useEffect,
} from 'react';
import { dateToStringParser } from '../../utils/dateToStringParser';
import { useDate } from '../../hooks/useDate';
import { useStore } from '../../hooks/useStore';
import { DateMode, TimeMode } from '../../store/state';
import { validator } from '../../utils/validator';
import styles from './timeOutput.module.scss';
import { Action } from '../../store/actions';

function TimeOutput() {

  const date = useDate();

  const [defaultValue, setDefaultValue] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    const dateStr = dateToStringParser.getDateAbs(date);
    setDefaultValue(dateStr);
  }, [date]);

  const inputRef = useRef<HTMLInputElement>(null);
  const { store, dispatch } = useStore();
  const { dateMode, timeMode } = store;

  const getIsReadOnly = () => {
    if (dateMode === DateMode.Start && timeMode.start === TimeMode.Relative) {
      return true;
    }
    if (dateMode === DateMode.End && timeMode.end === TimeMode.Relative) {
      return true;
    }
    return false;
  };

  const isReadOnly = getIsReadOnly();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!inputRef.current?.value) {
      return;
    }
    const inputStr = inputRef.current.value;
    const isValid = validator.getIsFullDateValid(inputStr);
    if (!isValid) {
      setError(true);
      return;
    }
    setError(false);
    dispatch({
      type: Action.ChangeTime,
      payload: dateToStringParser.getDateFromFullStr(inputStr),
    });
    dispatch({ type: Action.ClosePopover });
    dispatch({
      type: Action.ChangeDateMode,
      payload: DateMode.None,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.output}>
        <button
          className={styles.outputButton}
          type='submit'
          disabled={isReadOnly}
        >
          {dateMode}
          {' '}
          date
        </button>
        <input
          ref={inputRef}
          className={styles.outputInput}
          type='text'
          defaultValue={defaultValue}
          key={defaultValue}
          readOnly={isReadOnly}
        />
      </div>
      {error && <span className={styles.error}>Expected format MMM D, YYYY @ HH:mm:ss.SSS</span>}
    </form>

  );
}

export { TimeOutput };
