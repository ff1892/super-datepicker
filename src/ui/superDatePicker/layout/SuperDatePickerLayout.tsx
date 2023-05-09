import { useState } from 'react';
import { QuickSelectButton } from '../components/quickSelectButton';
import { PrettyFormatButton } from '../components/prettyFormatButton';
import { RefreshButton } from '../components/refreshButton';
import { QuickSelectModal } from '../components/quickSelectModal';
import { PopoverSection } from '../components/popoverSection';
import { useStore } from '../hooks/useStore';
import styles from './superDatePickerLayout.module.scss';
import { dateToStringParser } from '../utils/dateToStringParser';
import { CustomOutput } from '../../shared/customOutput';
import { PICKER_NAME } from '../constants/common';

function SuperDatePickerLayout() {

  const { store } = useStore();
  const { datesValid } = store;

  const [isPopoverShown, togglePopoverShown] = useState(false);

  const handlePrettyClick = () => {
    togglePopoverShown((prev) => !prev);
  };

  return (
    <>
      <div className={styles.pickerWrapper}>
        <div className={styles.quickButton}>
          <QuickSelectButton />
          {store.modals.quickSelectionShown && (
          <div className={styles.quickModal}>
            <QuickSelectModal />
          </div>
          )}
        </div>
        <div className={styles.prettyFormatWrapper}>
          {isPopoverShown
            ? <PopoverSection />
            : <PrettyFormatButton onClick={handlePrettyClick} />}
        </div>
        <RefreshButton />
      </div>
      <div className={styles.outputWrapper}>
        <CustomOutput
          name={PICKER_NAME.Start}
          value={dateToStringParser.getDateAbs(store.date.start)}
          isValid={datesValid}
        />
        <CustomOutput
          name={PICKER_NAME.End}
          value={dateToStringParser.getDateAbs(store.date.end)}
          isValid={datesValid}
        />
      </div>

    </>
  );
}

export { SuperDatePickerLayout };
