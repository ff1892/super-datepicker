import { useEffect, MouseEvent } from 'react';
import styles from './calendarTime.module.scss';
import { TIME_LIST } from '../../constants/calendar';
import { useDate } from '../../hooks/useDate';
import { getPreselectedTime, getSelectedTime } from '../../utils/getCalendarTime';
import { useStore } from '../../hooks/useStore';
import { Action } from '../../store/actions';

function CalendarTime() {

  const { dispatch } = useStore();
  const date = useDate();
  const selectedIndex = getSelectedTime(date);
  const preselectedIndex = selectedIndex === -1 ? getPreselectedTime(date) : -1;

  const handleTimeClick = (e: MouseEvent) => {
    const clickedTime = e.currentTarget.textContent;
    if (clickedTime) {
      const [hours, minutes] = clickedTime.split(':');
      const dateCopy = new Date(date.getTime());
      dateCopy.setHours(+hours, +minutes, 0, 0);
      dispatch({
        type: Action.ChangeTime,
        payload: dateCopy,
      });
    }
  };

  useEffect(() => {
    if (selectedIndex !== -1) {
      const selectedElement = document
        .getElementsByClassName(styles.selected)[0];
      selectedElement.scrollIntoView();
      return;
    }
    const preselectedElement = document
      .getElementsByClassName(styles.preselected)[0];
    preselectedElement.scrollIntoView();
  }, [date]);

  return (
    <div className={styles.timeWrapper}>
      <div className={styles.timeList} aria-label='Time list'>
        {
          TIME_LIST.map((time, index) => (
            <button
              type='button'
              aria-label={time}
              disabled={selectedIndex === index}
              className={`
                ${styles.timeItem}
                ${preselectedIndex === index ? styles.preselected : ''}
                ${selectedIndex === index ? styles.selected : ''}`}
              key={time}
              id={`${index}`}
              onClick={handleTimeClick}
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
