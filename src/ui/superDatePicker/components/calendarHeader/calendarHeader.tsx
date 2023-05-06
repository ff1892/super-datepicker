import styles from './calendarHeader.module.scss';
import { CALENDAR_MONTHS } from '../../constants/calendar';
import ChevronIcon from '../../../../../static/icons/chevron.svg';

interface ICalendarHeader {
  date: Date,
}

function CalendarHeader({ date }: ICalendarHeader) {
  return (
    <div className={styles.calendarHeader}>
      <button
        type='button'
        aria-label='Switch to previous month'
        className={
          `${styles.calendarHeaderButton}
          ${styles.calendarHeaderButtonPrev}`
        }
      >
        <ChevronIcon
          focusable={false}
          aria-hidden
        />
      </button>
      <button
        type='button'
        aria-label='Open month tab'
        className={styles.calendarMonth}
      >
        {CALENDAR_MONTHS[date.getMonth()]}
      </button>
      <button
        type='button'
        aria-label='Open year tab'
        className={styles.calendarYear}
      >
        {date.getFullYear()}
      </button>
      <button
        type='button'
        aria-label='Switch to next month'
        className={styles.calendarHeaderButton}
      >
        <ChevronIcon
          focusable={false}
          aria-hidden
        />
      </button>

    </div>
  );
}

export { CalendarHeader };
