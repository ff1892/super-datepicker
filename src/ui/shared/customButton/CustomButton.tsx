import { PropsWithChildren } from 'react';
import styles from './customButton.module.scss';

interface ICustomButton {
  text: string,
  type: 'button' | 'submit' | 'reset',
  disabled?: boolean,
  filled?: boolean,
  onClick?: () => void,
}

function CustomButton({
  text, type, disabled, children, filled, onClick,
}: PropsWithChildren<ICustomButton>): JSX.Element {
  return (
    <button
      className={`${styles.button} ${filled ? styles.buttonFilled : ''} ${disabled ? styles.disabled : ''}`}
      // eslint-disable-next-line react/button-has-type
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      { children }
      { text }
    </button>
  );
}

CustomButton.defaultProps = {
  disabled: false,
  filled: false,
  onClick: () => {},
};

export { CustomButton };
