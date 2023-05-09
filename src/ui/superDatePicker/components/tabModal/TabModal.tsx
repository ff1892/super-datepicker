import { MouseEvent, useRef } from 'react';
import { useOnClickOutside } from 'usehooks-ts';
import { CustomTab } from '../../../shared/customTab';
import { AbsolutePanel } from '../absolutePanel';
import { RelativePanel } from '../relativePanel';
import { NowPanel } from '../nowPanel';
import { TimeMode, DateMode, CalendarMode } from '../../store/state';
import { useStore } from '../../hooks/useStore';
import { Action } from '../../store/actions';
import styles from './tabModal.module.scss';

export function TabModal() {

  const formRef = useRef(null);
  const { store, dispatch } = useStore();
  const {
    dateMode, timeMode, modals, calendarMode,
  } = store;

  const activeTab = dateMode === DateMode.Start
    ? timeMode.start : timeMode.end;

  const handleFormClose = () => {
    if (modals.popoverShown) {
      dispatch({ type: Action.ClosePopover });
      dispatch({
        type: Action.ChangeDateMode,
        payload: DateMode.None,
      });
      if (calendarMode !== CalendarMode.Calendar) {
        dispatch({
          type: Action.ChangeCalendarMode,
          payload: CalendarMode.Calendar,
        });
      }
    }
  };

  const handleTabClick = (e: MouseEvent) => {
    if (e.currentTarget.textContent && e.currentTarget.textContent !== activeTab) {
      if (dateMode === DateMode.Start) {
        dispatch({
          type: Action.ChangeStartTimeMode,
          payload: e.currentTarget.textContent,
        });
      } else {
        dispatch({
          type: Action.ChangeEndTimeMode,
          payload: e.currentTarget.textContent,
        });
      }
      dispatch({
        type: Action.ChangeCalendarMode,
        payload: CalendarMode.Calendar,
      });
    }
  };

  useOnClickOutside(formRef, handleFormClose);

  return (
    <div className={styles.tabModal} role='tablist' aria-labelledby='label' ref={formRef}>
      <div className={styles.tabWrapper}>
        {
        Object.values(TimeMode).map((tabText) => (
          <CustomTab
            onClick={handleTabClick}
            tabText={tabText}
            isActive={activeTab === tabText}
            key={tabText}
          />
        ))
      }
      </div>

      <div
        className={styles.tabPanel}
        role='tabpanel'
        id={`tabpanel-${activeTab}`}
        aria-labelledby={`tab-${activeTab}`}
      >
        { activeTab === TimeMode.Absolute && <AbsolutePanel /> }
        { activeTab === TimeMode.Relative && <RelativePanel /> }
        { activeTab === TimeMode.Now && <NowPanel /> }
      </div>
    </div>
  );
}
