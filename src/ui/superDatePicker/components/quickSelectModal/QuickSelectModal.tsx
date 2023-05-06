import styles from './quickSelectModal.module.scss';
import { QuickSelectSection } from '../quickSelectSection';
import { CommonlyUsedSection } from '../commonlyUsedSection';
import { RecentlyUsedSection } from '../recentlyUsedSection';
import { RefreshSection } from '../refreshSection';

function QuickSelectModal() {
  return (
    <div className={styles.quickForm}>
      <div className={styles.quickWrapper}>
        <QuickSelectSection />
      </div>
      <div className={styles.quickWrapper}>
        <CommonlyUsedSection />
      </div>
      <div className={styles.quickWrapper}>
        <RecentlyUsedSection dates={['Date 1', 'Date 2']} />
      </div>
      <div className={styles.quickWrapper}>
        <RefreshSection />
      </div>
    </div>
  );
}

export { QuickSelectModal };
