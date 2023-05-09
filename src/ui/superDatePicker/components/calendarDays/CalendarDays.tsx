import { MouseEvent } from 'react';
import { WEEK_DAYS_SHORT, CALENDAR_MONTHS } from '../../constants/calendar';
import { getCalendarData } from '../../utils/getCalendarData';
import { useDate } from '../../hooks/useDate';
import styles from './calendarDays.module.scss';
import { useStore } from '../../hooks/useStore';
import { Action } from '../../store/actions';

function CalendarDays() {
  const { dispatch } = useStore();
  const date = useDate();
  const { prevMonthDays, thisMonthDays, nextMonthDays } = getCalendarData(date);
  const thisMonth = date.getMonth();
  const thisDay = date.getDate();

  const getClickedMonth = (e: MouseEvent) => {
    if (e.currentTarget.getAttribute('data-month') === 'prev') {
      return thisMonth - 1;
    }

    if (e.currentTarget.getAttribute('data-month') === 'next') {
      return thisMonth + 1;
    }

    return thisMonth;
  };

  const handleDayClick = (e: MouseEvent) => {
    const clickedDay = e.currentTarget.textContent;
    const clickedMonth = getClickedMonth(e);
    if (clickedDay) {
      const dateCopy = new Date(date.getTime());
      dateCopy.setMonth(clickedMonth, +clickedDay);
      dispatch({
        type: Action.ChangeTime,
        payload: dateCopy,
      });
    }
  };

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
              data-month='prev'
              type='button'
              aria-label={`Day ${day} of ${CALENDAR_MONTHS[thisMonth - 1]}`}
              key={`${day}-${thisMonth - 1}`}
              onClick={handleDayClick}
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
              onClick={handleDayClick}
              disabled={day === thisDay}
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
              data-month='next'
              aria-label={`Day ${day} of ${CALENDAR_MONTHS[thisMonth + 1]}`}
              key={`${day}-${thisMonth + 1}`}
              onClick={handleDayClick}
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
