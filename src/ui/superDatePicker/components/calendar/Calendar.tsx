import { CalendarDays } from '../calendarDays';
import { CalendarHeader } from '../calendarHeader';
import { CalendarTime } from '../calendarTime';
import { useEscapeEvent } from '../../hooks/useEscapeEvent';
import { useStore } from '../../hooks/useStore';
import { Action } from '../../store/actions';
import { DateMode } from '../../store/state';
import styles from './calendar.module.scss';

function Calendar() {

  const { dispatch } = useStore();

  const handleCalendarEscape = () => {
    dispatch({ type: Action.ClosePopover });
    dispatch({
      type: Action.ChangeDateMode,
      payload: DateMode.None,
    });
  };

  useEscapeEvent(handleCalendarEscape);

  return (
    <div className={styles.calendar}>
      <div className={styles.monthYear}>
        <CalendarHeader />
      </div>
      <div className={styles.dates}>
        <CalendarDays />
      </div>
      <div className={styles.time}>
        <CalendarTime />
      </div>
    </div>
  );
}

export { Calendar };
