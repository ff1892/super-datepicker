import { Calendar } from '../calendar';
import { MonthPanel } from '../monthPanel';
import { YearPanel } from '../yearPanel';
import { TimeOutput } from '../timeOutput';
import styles from './absolutePanel.module.scss';
import { useStore } from '../../hooks/useStore';
import { CalendarMode } from '../../store/state';

function AbsolutePanel() {

  const { store } = useStore();
  const { calendarMode } = store;

  return (
    <>
      <div className={styles.panelsWrapper}>
        { calendarMode === CalendarMode.Calendar && <Calendar />}
        { calendarMode === CalendarMode.Month && <MonthPanel />}
        { calendarMode === CalendarMode.Year && <YearPanel />}
      </div>
      <TimeOutput />
    </>
  );
}

export { AbsolutePanel };
