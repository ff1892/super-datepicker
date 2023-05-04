import { TimeUnit } from '../../constants';
import styles from './quickSelectSection.module.scss';
import IconChevron from '../../../../../static/icons/chevron.svg';
import { CustomSelect } from '../../../shared/customSelect/CustomSelect';
import { CustomInputNum } from '../../../shared/customInputNum';
import { CustomButton } from '../../../shared/customButton';

const timeTenseProps = {
  name: 'time-tense',
  ariaText: 'Time tense',
  defaultValue: 'next',
  options: [
    { value: 'next', text: 'Next' },
    { value: 'last', text: 'Last' },
  ],
};

const timeUnitProps = {
  name: 'time-unit',
  ariaText: 'time-unit',
  defaultValue: TimeUnit.Minutes,
  options: Object.values(TimeUnit).map((unit) => ({ value: unit, text: unit })),
};

function QuickSelectSection() {
  return (
    <>
      <div className={styles.quickSelectTitleWrapper}>
        <span className={styles.quickSelectTitle}>quick select</span>
        <div className={styles.quickSelectButtonWrapper}>
          <button className={styles.quickSelectButton} type='button' aria-label='Previous time window'>
            <IconChevron
              className={`${styles.quickSelectIcon} ${styles.rotatedIcon}`}
              aria-hidden
              focusable={false}
            />
          </button>
          <button className={styles.quickSelectButton} type='button' aria-label='Next time window'>
            <IconChevron
              className={styles.quickSelectIcon}
              aria-hidden
              focusable={false}
            />
          </button>
        </div>
      </div>
      <form className={styles.quickSelectForm}>
        <CustomSelect {...timeTenseProps} />
        <CustomInputNum ariaText='Time value' defaultValue={15} />
        <CustomSelect {...timeUnitProps} />
        <CustomButton type='submit' text='Apply' />
      </form>
    </>
  );
}

export { QuickSelectSection };
