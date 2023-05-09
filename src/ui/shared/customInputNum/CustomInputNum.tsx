import { ChangeEvent } from 'react';
import styles from './customInputNum.module.scss';

interface ICustomInputNum {
  ariaText: string,
  defaultValue: number,
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  name?: string,
}

function CustomInputNum({
  ariaText, defaultValue, name, onChange,
}: ICustomInputNum): JSX.Element {
  return (
    <input
      name={name}
      onChange={onChange}
      aria-label={ariaText}
      defaultValue={defaultValue}
      min={0}
      className={styles.input}
      type='number'
    />
  );
}

CustomInputNum.defaultProps = {
  onChange: () => {},
  name: 'custom input number',
};

export { CustomInputNum };
