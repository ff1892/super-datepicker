import styles from './customOutput.module.scss';

interface ICustomOutput {
  name: string,
  value: string,
  isValid: boolean,
}

function CustomOutput({ name, value, isValid }: ICustomOutput) {
  return (
    <input
      className={`${styles.customInput} ${isValid ? '' : styles.invalid}`}
      type='text'
      name={name}
      value={value}
      readOnly
    />
  );
}

export { CustomOutput };
