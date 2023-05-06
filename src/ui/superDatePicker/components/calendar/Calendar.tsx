import { CalendarDays } from '../calendarDays';
import { CalendarHeader } from '../calendarHeader';
import { CalendarTime } from '../calendarTime';
import styles from './calendar.module.scss';

interface ICalendar {
  date?: Date,
}

function Calendar({ date = new Date() }: ICalendar) {
  return (
    <div className={styles.calendar}>
      <div className={styles.monthYear}>
        <CalendarHeader date={date} />
      </div>
      <div className={styles.dates}>
        <CalendarDays date={date} />
      </div>
      <div className={styles.time}>
        <CalendarTime />
      </div>
    </div>
  );
}

Calendar.defaultProps = {
  date: new Date(),
};

export { Calendar };
