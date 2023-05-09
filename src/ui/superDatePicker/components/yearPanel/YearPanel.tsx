import { MouseEvent } from 'react';
import { YEARS_IN_LIST } from '../../constants/calendar';
import { useEscapeEvent } from '../../hooks/useEscapeEvent';
import { useStore } from '../../hooks/useStore';
import { Action } from '../../store/actions';
import { CalendarMode } from '../../store/state';
import { getYearsList } from '../../utils/getYearsList';
import { useDate } from '../../hooks/useDate';
import styles from './yearPanel.module.scss';

function YearPanel() {

  const { dispatch } = useStore();
  const date = useDate();
  const currentYear = date.getFullYear().toString();

  const handleYearEscape = () => {
    dispatch({
      type: Action.ChangeCalendarMode,
      payload: CalendarMode.Calendar,
    });
  };

  const handleYearClick = (e: MouseEvent) => {
    const clickedYear = e.currentTarget?.textContent;
    if (clickedYear && clickedYear !== currentYear) {
      date.setFullYear(+clickedYear);
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

  useEscapeEvent(handleYearEscape);

  const thisYear = date.getFullYear();
  const yearsList = getYearsList(thisYear, YEARS_IN_LIST);

  return (
    <div className={styles.yearWrapper}>
      <div className={styles.yearGrid} aria-label='Years list'>
        {
          yearsList.map((year) => (
            <button
              className={`
                ${styles.yearButton}
                ${year === thisYear ? styles.yearSelected : ''}`}
              type='button'
              key={year}
              onClick={handleYearClick}
            >
              { year }
            </button>
          ))
        }
      </div>
    </div>
  );
}

export { YearPanel };
