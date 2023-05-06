import styles from './customInputNum.module.scss';

interface ICustomInputNum {
  ariaText: string,
  defaultValue: number,
}

function CustomInputNum({ ariaText, defaultValue }: ICustomInputNum): JSX.Element {
  return (
    <input
      aria-label={ariaText}
      defaultValue={defaultValue}
      min={0}
      className={styles.input}
      type='number'
    />
  );
}

export { CustomInputNum };
