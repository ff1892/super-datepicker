import { CustomButton } from '../../../shared/customButton';
import { useEscapeEvent } from '../../hooks/useEscapeEvent';
import { useStore } from '../../hooks/useStore';
import { Action } from '../../store/actions';
import { DateMode } from '../../store/state';
import styles from './nowPanel.module.scss';

function NowPanel() {

  const { dispatch } = useStore();

  const handleCalendarEscape = () => {
    dispatch({ type: Action.ClosePopover });
    dispatch({
      type: Action.ChangeDateMode,
      payload: DateMode.None,
    });
  };

  const handleNowClick = () => {
    dispatch({
      type: Action.ChangeTime,
      payload: new Date(),
    });
    dispatch({ type: Action.ClosePopover });
    dispatch({
      type: Action.ChangeDateMode,
      payload: DateMode.None,
    });
  };

  useEscapeEvent(handleCalendarEscape);

  return (
    <>
      <p className={styles.nowText}>
        Setting the time to &quot;now&quot; means that on every refresh
        this time will be set to the time of the refresh.
      </p>
      <CustomButton
        type='button'
        text='Set date to now'
        filled
        onClick={handleNowClick}
      />
    </>
  );
}

export { NowPanel };
