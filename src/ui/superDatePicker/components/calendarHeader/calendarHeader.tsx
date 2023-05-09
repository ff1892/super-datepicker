import { MouseEvent } from 'react';
import { CALENDAR_MONTHS } from '../../constants/calendar';
import { useStore } from '../../hooks/useStore';
import { CalendarMode } from '../../store/state';
import { Action } from '../../store/actions';
import { useDate } from '../../hooks/useDate';
import styles from './calendarHeader.module.scss';
import ChevronIcon from '../../../../../static/icons/chevron.svg';

function CalendarHeader() {

  const { dispatch } = useStore();
  const date = useDate();
  const thisMonth = date.getMonth();

  const getClickedMonth = (e: MouseEvent) => {
    if (e.currentTarget.getAttribute('data-month') === 'prev') {
      return thisMonth - 1;
    }
    return thisMonth + 1;
  };

  const handleMonthSwitch = (e: MouseEvent) => {
    const clickedMonth = getClickedMonth(e);
    date.setMonth(clickedMonth);

    dispatch({
      type: Action.ChangeTime,
      payload: new Date(date.getTime()),
    });

  };

  const handleMonthClick = () => {
    dispatch({
      type: Action.ChangeCalendarMode,
      payload: CalendarMode.Month,
    });
  };

  const handleYearClick = () => {
    dispatch({
      type: Action.ChangeCalendarMode,
      payload: CalendarMode.Year,
    });
  };

  return (
    <div className={styles.calendarHeader}>
      <button
        onClick={handleMonthSwitch}
        data-month='prev'
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
        onClick={handleMonthClick}
      >
        {CALENDAR_MONTHS[date.getMonth()]}
      </button>
      <button
        type='button'
        aria-label='Open year tab'
        className={styles.calendarYear}
        onClick={handleYearClick}
      >
        {date.getFullYear()}
      </button>
      <button
        onClick={handleMonthSwitch}
        data-month='next'
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
