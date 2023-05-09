import { useContext } from 'react';
import TimeIcon from '../../../../../static/icons/time.svg';
import ChevronIcon from '../../../../../static/icons/chevron.svg';
import styles from './quickSelectButton.module.scss';
import { StateContext, DispatchContext } from '../../store/context';
import { Action } from '../../store/actions';

function QuickSelectButton() {

  const { modals } = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  const handleOpenModal = () => {
    if (!modals.quickSelectionShown) {
      dispatch({ type: Action.OpenQuickSelection });
    }
  };

  return (
    <button
      type='button'
      className={styles.quickButton}
      onClick={handleOpenModal}
    >
      <TimeIcon
        className={styles.quickIcon}
        focusable={false}
        aria-hidden
      />
      <ChevronIcon
        className={`${styles.quickIcon} ${styles.quickIconChevron}`}
        focusable={false}
        aria-hidden
      />
    </button>
  );
}

export { QuickSelectButton };
