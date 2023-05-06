import styles from './customSelect.module.scss';

interface IOptions {
  value: string,
  text: string,
}

export interface ICustomSelect {
  name: string,
  ariaText: string,
  defaultValue?: string,
  options: IOptions[],
}

function CustomSelect({
  name, ariaText, defaultValue, options,
}: ICustomSelect): JSX.Element {
  return (
    <div className={styles.selectWrapper}>
      <select
        className={styles.select}
        name={name}
        id={name}
        aria-label={ariaText}
        defaultValue={defaultValue}
      >
        {
        options.map(({ value, text }) => (
          <option
            key={value}
            value={value}
          >
            { text }
          </option>
        ))
      }
      </select>
    </div>
  );
}

CustomSelect.defaultProps = {
  defaultValue: undefined,
};

export { CustomSelect };
