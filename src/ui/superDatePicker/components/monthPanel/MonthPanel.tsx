import { CALENDAR_MONTHS } from '../../constants/calendar';
import styles from './monthPanel.module.scss';

interface IMonthPanel {
  date?: Date;
}

function MonthPanel({ date = new Date() }: IMonthPanel) {

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
            >
              { month }
            </button>
          ))
        }
      </div>
    </div>
  );
}

MonthPanel.defaultProps = {
  date: new Date(),
};

export { MonthPanel };
