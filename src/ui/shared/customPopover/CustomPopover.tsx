import { MouseEvent } from 'react';
import styles from './customPopover.module.scss';

interface IPopover {
  align: 'left' | 'right',
  text: string,
  isActive: boolean,
  onClick: (e: MouseEvent) => void,
}

function CustomPopover({
  align, text, isActive, onClick,
}: IPopover): JSX.Element {
  return (
    <div className={styles.popoverWrapper}>
      <button
        type='button'
        onClick={onClick}
        className={
          `${styles.popoverButton}
          ${align === 'left' ? styles.alignLeft : styles.alignRight}
          ${isActive ? styles.popoverActive : ''}`
        }
      >
        {text}
      </button>
    </div>
  );
}

export { CustomPopover };
