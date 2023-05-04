import styles from './calendar.module.scss';

function Calendar() {
  return (
    <div className={styles.calendar}>
      <div className={styles.monthYear}>
        <button
          type='button'
          aria-label='Switch to previous month'
        >
          p
        </button>
      </div>
      <div className={styles.dates}>
        <span>dates</span>
      </div>
      <div className={styles.time}>
        <span>time</span>
      </div>
    </div>
  );
}

export { Calendar };
