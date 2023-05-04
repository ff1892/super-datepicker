import { useState } from 'react';
import { CustomPopover } from '../../../shared/customPopover';
import ArrowIcon from '../../../../../static/icons/arrow.svg';
import styles from './popoverSection.module.scss';
import { TabModal } from '../tabModal';

const TabModalMode = {
  Start: 'start',
  End: 'end',
  Hidden: 'none',
};

function PopoverSection() {

  const [modalMode, setModalMode] = useState(TabModalMode.Start);

  return (
    <div className={styles.popoverWrapper}>
      <div className={
        `${styles.tabModalWrapper}
        ${modalMode === TabModalMode.End ? styles.alignRight : styles.alignLeft}`
        }
      >
        {modalMode !== TabModalMode.Hidden && <TabModal />}
      </div>
      <div className={styles.popoverButton}>
        <CustomPopover
          align='right'
          text='Last'
          isActive={modalMode === TabModalMode.Start}
          onClick={() => setModalMode(TabModalMode.Start)}
        />
      </div>
      <div className={styles.popoverIcon}>
        <ArrowIcon />
      </div>
      <div className={styles.popoverButton}>
        <CustomPopover
          align='left'
          text='Next'
          isActive={modalMode === TabModalMode.End}
          onClick={() => setModalMode(TabModalMode.End)}
        />
      </div>
    </div>
  );
}

export { PopoverSection };
