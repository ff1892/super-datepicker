import { YEARS_IN_LIST } from '../../constants/calendar';
import { getYearsList } from '../../utils/getYearsList';
import styles from './YearPanel.module.scss';

interface IYearPanel {
  date?: Date;
}

function YearPanel({ date = new Date() }: IYearPanel) {

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
            >
              { year }
            </button>
          ))
        }
      </div>
    </div>
  );
}

YearPanel.defaultProps = {
  date: new Date(),
};

export { YearPanel };
