import { useState } from 'react';
import { QuickSelectButton } from '../components/quickSelectButton';
import { PrettyFormatButton } from '../components/prettyFormatButton';
import { RefreshButton } from '../components/refreshButton';
import { QuickSelectModal } from '../components/quickSelectModal';
import { PopoverSection } from '../components/popoverSection';
import { useStore } from '../hooks/useStore';
import styles from './superDatePickerLayout.module.scss';

function SuperDatePickerLayout() {

  const { store } = useStore();

  const [isPopoverShown, togglePopoverShown] = useState(false);

  const handlePrettyClick = () => {
    togglePopoverShown((prev) => !prev);
  };

  return (
    <>
      <h1 className={styles.title}>Super Date Picker</h1>
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

    </>
  );
}

export { SuperDatePickerLayout };
