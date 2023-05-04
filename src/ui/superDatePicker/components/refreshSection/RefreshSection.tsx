import { CustomSelect } from '../../../shared/customSelect';
import { CustomInputNum } from '../../../shared/customInputNum';
import { TimeUnit } from '../../constants';
import styles from './refreshSection.module.scss';
import { CustomButton } from '../../../shared/customButton';
import StartIcon from '../../../../../static/icons/start.svg';

const RefreshSelectProps = {
  name: 'time-unit',
  ariaText: 'Time unit',
  defaultValue: TimeUnit.Seconds,
  options: ['seconds', 'minutes', 'hours'].map((unit) => ({ text: unit, value: unit })),
};

function RefreshSection() {
  return (
    <div className={styles.refreshWrapper}>
      <span className={styles.refreshTitle}>Refresh every</span>
      <form className={styles.refreshForm}>
        <CustomInputNum ariaText='Refresh internal value' defaultValue={0} />
        <CustomSelect {...RefreshSelectProps} />
        <CustomButton type='submit' text='Start'>
          <StartIcon aria-hidden focusable={false} />
        </CustomButton>
      </form>
    </div>
  );
}

export { RefreshSection };
