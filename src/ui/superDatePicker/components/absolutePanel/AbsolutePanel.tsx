// import { Calendar } from '../calendar';
// import { MonthPanel } from '../monthPanel';
import { YearPanel } from '../yearPanel';
import { TimeOutput } from '../timeOutput';
import styles from './absolutePanel.module.scss';

function AbsolutePanel() {

  return (
    <>
      <div className={styles.panelsWrapper}>
        {/* <Calendar /> */}
        {/* <MonthPanel /> */}
        <YearPanel />
      </div>
      <TimeOutput />
    </>
  );
}

export { AbsolutePanel };
