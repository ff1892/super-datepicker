import { MouseEvent } from 'react';
import styles from './prettyFromatButton.module.scss';
import { useStore } from '../../hooks/useStore';

interface IPrettyFormat {
  onClick: (e: MouseEvent) => void;
}

function PrettyFormatButton({ onClick }: IPrettyFormat): JSX.Element {

  const { store: { prettyLabel } } = useStore();

  return (
    <button
      type='button'
      className={styles.prettyButton}
      onClick={onClick}
    >
      { prettyLabel }
      <span className={styles.prettyTip}>
        Show dates
      </span>
    </button>
  );
}

export { PrettyFormatButton };
