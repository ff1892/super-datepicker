import { ChangeEvent } from 'react';
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
  onChange?: (e: ChangeEvent) => void;
  lowerCase?: boolean,
}

function CustomSelect({
  name, ariaText, defaultValue, options, lowerCase, onChange,
}: ICustomSelect): JSX.Element {
  return (
    <div className={styles.selectWrapper}>
      <select
        className={styles.select}
        name={name}
        id={name}
        aria-label={ariaText}
        defaultValue={defaultValue}
        onChange={onChange}
      >
        {
        options.map(({ value, text }) => (
          <option
            key={value}
            value={value}
          >
            { lowerCase ? text.toLowerCase() : text }
          </option>
        ))
      }
      </select>
    </div>
  );
}

CustomSelect.defaultProps = {
  defaultValue: undefined,
  onChange: () => {},
  lowerCase: true,
};

export { CustomSelect };
