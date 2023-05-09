import { useContext, useRef } from 'react';
import { useOnClickOutside } from 'usehooks-ts';
import { QuickSelectSection } from '../quickSelectSection';
import { CommonlyUsedSection } from '../commonlyUsedSection';
// import { RecentlyUsedSection } from '../recentlyUsedSection';
import { RefreshSection } from '../refreshSection';
import { DispatchContext, StateContext } from '../../store/context';
import styles from './quickSelectModal.module.scss';
import { Action } from '../../store/actions';
import { useEscapeEvent } from '../../hooks/useEscapeEvent';

function QuickSelectModal() {

  const formRef = useRef(null);

  const { modals } = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  const handleFormClose = () => {
    if (modals.quickSelectionShown) {
      dispatch({ type: Action.CloseQuickSelection });
    }
  };

  useOnClickOutside(formRef, handleFormClose);
  useEscapeEvent(handleFormClose);

  return (
    <div
      className={styles.quickForm}
      ref={formRef}
    >
      <div className={styles.quickWrapper}>
        <QuickSelectSection />
      </div>
      <div className={styles.quickWrapper}>
        <CommonlyUsedSection />
      </div>
      {/* TO DO
      <div className={styles.quickWrapper}>
        <RecentlyUsedSection dates={['Date 1', 'Date 2']} />
      </div> */}
      <div className={styles.quickWrapper}>
        <RefreshSection />
      </div>
    </div>
  );
}

export { QuickSelectModal };
