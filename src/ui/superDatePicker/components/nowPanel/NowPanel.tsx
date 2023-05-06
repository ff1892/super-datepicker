import styles from './nowPanel.module.scss';
import { CustomButton } from '../../../shared/customButton';

function NowPanel() {
  return (
    <>
      <p className={styles.nowText}>
        Setting the time to &quot;now&quot; means that on every refresh
        this time will be set to the time of the refresh.
      </p>
      <CustomButton
        type='button'
        text='Set date to now'
        filled
      />
    </>
  );
}

export { NowPanel };
