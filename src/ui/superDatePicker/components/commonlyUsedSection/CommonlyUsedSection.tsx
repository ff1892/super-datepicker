import styles from './commonlyUsedSection.module.scss';
import { CommonlyUsedTime } from '../../constants/common';

function CommonlyUsedSection() {
  return (
    <>
      <span className={styles.commonlyTitle}>Commonly used</span>
      <ul className={styles.commonlyList}>
        {
          CommonlyUsedTime.map((time) => (
            <li className={styles.commonlyItem}>
              <button type='button' className={styles.commonlyButton}>
                {time}
              </button>
            </li>
          ))
        }
      </ul>
    </>
  );
}

export { CommonlyUsedSection };
