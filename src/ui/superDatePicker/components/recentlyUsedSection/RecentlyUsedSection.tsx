import styles from './recentlyUsedSection.module.scss';

interface IRecentlyUsed {
  dates: string[],
}

function RecentlyUsedSection({ dates }: IRecentlyUsed): JSX.Element {
  return (
    <div className={styles.recentlyWrapper}>
      <span className={styles.recentlyTitle}>
        Recently used date ranges
      </span>
      <ul className={styles.recentlyList}>
        {
          dates.map((date) => (
            <li className={styles.recentlyItem}>
              <button type='button' className={styles.recentlyButton}>
                {date}
              </button>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export { RecentlyUsedSection };
