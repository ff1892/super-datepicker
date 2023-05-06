import { useState, MouseEvent } from 'react';
import styles from './tabModal.module.scss';
import { CustomTab } from '../../../shared/customTab';
import { AbsolutePanel } from '../absolutePanel';
import { RelativePanel } from '../relativePanel';
import { NowPanel } from '../nowPanel';

const TabButtons = {
  Absolute: 'Absolute',
  Relative: 'Relative',
  Now: 'Now',
};

export function TabModal() {
  const [currentTab, setCurrentTab] = useState(TabButtons.Absolute);

  const handleTabClick = (e: MouseEvent) => {
    if (e.currentTarget.textContent && e.currentTarget.textContent !== currentTab) {
      setCurrentTab(e.currentTarget.textContent);
    }
  };

  return (
    <div className={styles.tabModal} role='tablist' aria-labelledby='label'>
      <div className={styles.tabWrapper}>
        {
        Object.values(TabButtons).map((tabText) => (
          <CustomTab
            onClick={handleTabClick}
            tabText={tabText}
            isActive={currentTab === tabText}
            key={tabText}
          />
        ))
      }
      </div>

      <div
        className={styles.tabPanel}
        role='tabpanel'
        id={`tabpanel-${currentTab}`}
        aria-labelledby={`tab-${currentTab}`}
      >
        { currentTab === TabButtons.Absolute && <AbsolutePanel /> }
        { currentTab === TabButtons.Relative && <RelativePanel /> }
        { currentTab === TabButtons.Now && <NowPanel /> }
      </div>
    </div>
  );
}
