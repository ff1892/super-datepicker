import styles from './calendarTime.module.scss';
import { TIME_LIST } from '../../constants/calendar';

function CalendarTime() {
  return (
    <div className={styles.timeWrapper}>
      <div className={styles.timeList} aria-label='Time list'>
        {
          TIME_LIST.map((time, index) => (
            <button
              type='button'
              aria-label={time}
              className={styles.timeItem}
              key={time}
              id={`${index}`}
            >
              {time}
            </button>
          ))
        }
      </div>
    </div>
  );
}

export { CalendarTime };
