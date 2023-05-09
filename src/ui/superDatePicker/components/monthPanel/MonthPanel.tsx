import { MouseEvent } from 'react';
import { CALENDAR_MONTHS } from '../../constants/calendar';
import { useDate } from '../../hooks/useDate';
import { useEscapeEvent } from '../../hooks/useEscapeEvent';
import { useStore } from '../../hooks/useStore';
import { Action } from '../../store/actions';
import { CalendarMode } from '../../store/state';
import styles from './monthPanel.module.scss';

function MonthPanel() {

  const { dispatch } = useStore();
  const date = useDate();
  const monthStr = CALENDAR_MONTHS[date.getMonth()];

  const handleMonthEscape = () => {
    dispatch({
      type: Action.ChangeCalendarMode,
      payload: CalendarMode.Calendar,
    });
  };

  const handleMonthClick = (e: MouseEvent) => {
    const clickedMonth = e.currentTarget?.textContent;
    if (clickedMonth && clickedMonth !== monthStr) {
      date.setMonth(CALENDAR_MONTHS.indexOf(clickedMonth));
      dispatch({
        type: Action.ChangeTime,
        payload: new Date(date.getTime()),
      });
    }
    dispatch({
      type: Action.ChangeCalendarMode,
      payload: CalendarMode.Calendar,
    });
  };

  useEscapeEvent(handleMonthEscape);

  const thisMonth = date?.getMonth();

  return (
    <div className={styles.monthWrapper}>
      <div className={styles.monthGrid} aria-label='Months list'>
        {
          CALENDAR_MONTHS.map((month) => (
            <button
              className={`
                ${styles.monthButton}
                ${month === CALENDAR_MONTHS[thisMonth] ? styles.monthSelected : ''}`}
              type='button'
              key={month}
              onClick={handleMonthClick}
            >
              { month }
            </button>
          ))
        }
      </div>
    </div>
  );
}

export { MonthPanel };
