import styles from './calendarDays.module.scss';
import { WEEK_DAYS_SHORT, CALENDAR_MONTHS } from '../../constants/calendar';
import { getCalendarData } from '../../utils/getCalendarData';

interface ICalendarDays {
  date: Date,
}

function CalendarDays({ date }: ICalendarDays) {
  const { prevMonthDays, thisMonthDays, nextMonthDays } = getCalendarData(date);
  const thisMonth = date.getMonth();
  const thisDay = date.getDate();

  return (
    <div className={styles.daysWrapper}>
      <div className={styles.daysGrid}>
        {
          WEEK_DAYS_SHORT.map((day) => (
            <span className={styles.weekDay} key={day}>
              { day }
            </span>
          ))
        }
        {
          prevMonthDays.map((day) => (
            <button
              className={styles.dayButton}
              type='button'
              aria-label={`Day ${day} of ${CALENDAR_MONTHS[thisMonth - 1]}`}
              key={`${day}-${thisMonth - 1}`}
            >
              { day }
            </button>
          ))
        }
        {
          thisMonthDays.map((day) => (
            <button
              className={
                `${styles.dayButton}
                ${styles.dayButtonThisMonth}
                ${day === thisDay ? styles.daySelected : ''}`
              }
              type='button'
              aria-label={`Day ${day} of ${CALENDAR_MONTHS[thisMonth]}`}
              key={`${day}-${thisMonth}`}
            >
              { day }
            </button>
          ))
        }
        {
          nextMonthDays.map((day) => (
            <button
              className={styles.dayButton}
              type='button'
              aria-label={`Day ${day} of ${CALENDAR_MONTHS[thisMonth + 1]}`}
              key={`${day}-${thisMonth + 1}`}
            >
              { day }
            </button>
          ))
        }
      </div>
    </div>
  );
}

export { CalendarDays };
