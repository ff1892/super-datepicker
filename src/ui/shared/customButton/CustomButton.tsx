import { PropsWithChildren } from 'react';
import styles from './customButton.module.scss';

interface ICustomButton {
  text: string,
  type: 'button' | 'submit' | 'reset',
  disabled?: boolean,
  filled?: boolean,
}

function CustomButton({
  text, type, disabled, children, filled,
}: PropsWithChildren<ICustomButton>): JSX.Element {
  return (
    <button
      className={`${styles.button} ${filled ? styles.buttonFilled : ''}`}
      // eslint-disable-next-line react/button-has-type
      type={type}
      disabled={disabled}
    >
      { children }
      { text }
    </button>
  );
}

CustomButton.defaultProps = {
  disabled: false,
  filled: false,
};

export { CustomButton };
