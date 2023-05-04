import { MouseEvent } from 'react';
import styles from './prettyFromatButton.module.scss';

interface IPrettyFormat {
  onClick: (e: MouseEvent) => void;
}

function PrettyFormatButton({ onClick }: IPrettyFormat): JSX.Element {
  return (
    <button
      type='button'
      className={styles.prettyButton}
      onClick={onClick}
    >
      Last 30 minutes
      <span className={styles.prettyTip}>
        Show dates
      </span>
    </button>
  );
}

export { PrettyFormatButton };
