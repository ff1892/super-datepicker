import styles from './relativePanel.module.scss';
import { CustomInputNum } from '../../../shared/customInputNum';
import { CustomSelect } from '../../../shared/customSelect';
import { TimeUnit } from '../../constants';

const selectOptionsAgo = Object.values(TimeUnit).map((unit) => (
  { value: `${unit}-ago`, text: `${unit} ago` }
));

const selectOptionsFromNow = Object.values(TimeUnit).map((unit) => (
  { value: `${unit}-now`, text: `${unit} from now` }
));

function RelativePanel() {
  return (
    <>
      <div className={styles.inputWrapper}>
        <CustomInputNum
          ariaText='Time span amount'
          defaultValue={0}
        />
        <CustomSelect
          ariaText='Relative time span'
          name='relative-time-span'
          options={[...selectOptionsAgo, ...selectOptionsFromNow]}
        />
      </div>
      <div>
        <label className={styles.round}>
          <input type='checkbox' name='round' className={styles.checkbox} />
          Round to the minute
        </label>
      </div>
      <div className={styles.output}>
        <label className={styles.outputLabel}>Start date</label>
        <input
          className={styles.outputInput}
          type='text'
          value='Default Value'
          readOnly
        />
      </div>
    </>
  );
}

export { RelativePanel };
