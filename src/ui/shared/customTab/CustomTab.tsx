import { MouseEvent } from 'react';
import styles from './customTab.module.scss';

interface ICustomTab {
  tabText: string,
  isActive: boolean,
  onClick: (e: MouseEvent) => void;
}

function CustomTab({ tabText, isActive, onClick }: ICustomTab): JSX.Element {
  return (
    <button
      className={`${styles.tab} ${isActive ? styles.tabActive : ''}`}
      type='button'
      role='tab'
      id={`tab-${tabText}`}
      aria-selected={isActive}
      aria-controls={`tabpanel-${tabText}`}
      onClick={onClick}
    >
      {tabText}
    </button>
  );
}

export { CustomTab };
