import { CustomPopover } from '../../../shared/customPopover';
import ArrowIcon from '../../../../../static/icons/arrow.svg';
import styles from './popoverSection.module.scss';
import { TabModal } from '../tabModal';
import { useStore } from '../../hooks/useStore';
import { Action } from '../../store/actions';
import { CalendarMode, DateMode } from '../../store/state';
import { dateToStringParser } from '../../utils/dateToStringParser';

function PopoverSection() {

  const { store, dispatch } = useStore();
  const {
    date, dateMode, calendarMode, modals, datesValid,
  } = store;
  const isModalShown = modals.popoverShown;

  const [startDate, endDate] = Object.values(date)
    .map(dateToStringParser.getDateAbs);

  const handleStartClick = () => {
    if (dateMode === DateMode.Start) {
      return;
    }
    dispatch({ type: Action.OpenPopover });
    dispatch({
      type: Action.ChangeDateMode,
      payload: DateMode.Start,
    });
    if (calendarMode !== CalendarMode.Calendar) {
      dispatch({
        type: Action.ChangeCalendarMode,
        payload: CalendarMode.Calendar,
      });
    }
  };

  const handleEndClick = () => {
    if (dateMode === DateMode.End) {
      return;
    }
    dispatch({ type: Action.OpenPopover });
    dispatch({
      type: Action.ChangeDateMode,
      payload: DateMode.End,
    });
    if (calendarMode !== CalendarMode.Calendar) {
      dispatch({
        type: Action.ChangeCalendarMode,
        payload: CalendarMode.Calendar,
      });
    }
  };

  return (
    <div className={styles.popoverWrapper}>
      <div className={
        `${styles.tabModalWrapper}
        ${dateMode === DateMode.Start ? styles.alignLeft : styles.alignRight}`
        }
      >
        {isModalShown && <TabModal />}
      </div>
      <div className={styles.popoverButton}>
        <CustomPopover
          align='right'
          text={startDate}
          isActive={dateMode === DateMode.Start}
          onClick={handleStartClick}
          disabled={dateMode === DateMode.Start}
          isValid={datesValid}
        />
      </div>
      <div className={styles.popoverIcon}>
        <ArrowIcon />
      </div>
      <div className={styles.popoverButton}>
        <CustomPopover
          align='left'
          text={endDate}
          isActive={dateMode === DateMode.End}
          onClick={handleEndClick}
          disabled={dateMode === DateMode.End}
          isValid={datesValid}
        />
      </div>
    </div>
  );
}

export { PopoverSection };
