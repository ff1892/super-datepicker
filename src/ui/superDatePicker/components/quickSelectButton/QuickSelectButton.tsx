import TimeIcon from '../../../../../static/icons/time.svg';
import ChevronIcon from '../../../../../static/icons/chevron.svg';
import styles from './quickSelectButton.module.scss';

function QuickSelectButton() {
  return (
    <button type='button' className={styles.quickButton}>
      <TimeIcon
        className={styles.quickIcon}
        focusable={false}
        aria-hidden
      />
      <ChevronIcon
        className={`${styles.quickIcon} ${styles.quickIconChevron}`}
        focusable={false}
        aria-hidden
      />
    </button>
  );
}

export { QuickSelectButton };
