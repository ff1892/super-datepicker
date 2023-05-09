import { MouseEvent } from 'react';
import styles from './customPopover.module.scss';

interface IPopover {
  align: 'left' | 'right',
  text: string,
  isActive: boolean,
  disabled: boolean,
  onClick: (e: MouseEvent) => void,
  isValid?: boolean,
}

function CustomPopover({
  align, text, isActive, disabled, isValid, onClick,
}: IPopover): JSX.Element {
  return (
    <div className={styles.popoverWrapper}>
      <button
        type='button'
        onClick={onClick}
        disabled={disabled}
        className={
          `${styles.popoverButton}
          ${align === 'left' ? styles.alignLeft : styles.alignRight}
          ${isActive ? styles.popoverActive : ''}
          ${isValid ? '' : styles.popoverInvalid}`
        }
      >
        {text}
      </button>
    </div>
  );
}

CustomPopover.defaultProps = {
  isValid: true,
};

export { CustomPopover };
