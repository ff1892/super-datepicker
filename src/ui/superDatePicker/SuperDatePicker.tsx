import { useState } from 'react';
import styles from './superDatePicker.module.scss';
import { QuickSelectButton } from './components/quickSelectButton';
import { PrettyFormatButton } from './components/prettyFormatButton';
import { RefreshButton } from './components/refreshButton';
import { QuickSelectModal } from './components/quickSelectModal';
import { PopoverSection } from './components/popoverSection';

function SuperDatePicker() {
  const isQuickSelectOpen = false;

  const [isPopoverShown, togglePopoverShown] = useState(true);

  const handlePrettyClick = () => {
    togglePopoverShown((prev) => !prev);
  };

  return (
    <>
      <h1 className={styles.title}>Super Date Picker</h1>
      <div className={styles.pickerWrapper}>
        <div className={styles.quickButton}>
          <QuickSelectButton />
          { isQuickSelectOpen && (
          <div className={styles.quickModal}>
            <QuickSelectModal />
          </div>
          )}
        </div>
        <div className={styles.prettyFormatWrapper}>
          { isPopoverShown
            ? <PopoverSection />
            : <PrettyFormatButton onClick={handlePrettyClick} /> }
        </div>
        <RefreshButton />
      </div>
    </>
  );
}

export { SuperDatePicker };
