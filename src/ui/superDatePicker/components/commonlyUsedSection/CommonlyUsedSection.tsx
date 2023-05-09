import { MouseEvent } from 'react';
import styles from './commonlyUsedSection.module.scss';
import { CommonlyUsedTime } from '../../constants/common';
import { useStore } from '../../hooks/useStore';
import { getDateRange } from '../../utils/getDateRange';
import { Action } from '../../store/actions';

function CommonlyUsedSection() {

  const { dispatch } = useStore();

  const handleCommonlyClick = (e: MouseEvent<HTMLButtonElement>) => {
    const query = e.currentTarget.textContent;
    if (!query) return;
    const { start, end } = getDateRange(query);
    dispatch({ type: Action.CloseQuickSelection });
    dispatch({
      type: Action.SetStartTime,
      payload: start,
    });
    dispatch({
      type: Action.SetEndTime,
      payload: end,
    });
    dispatch({
      type: Action.SetPrettyLabel,
      payload: query,
    });
  };

  return (
    <>
      <span className={styles.commonlyTitle}>Commonly used</span>
      <ul className={styles.commonlyList}>
        {
          CommonlyUsedTime.map((time) => (
            <li className={styles.commonlyItem} key={time}>
              <button
                type='button'
                className={styles.commonlyButton}
                onClick={handleCommonlyClick}
              >
                {time}
              </button>
            </li>
          ))
        }
      </ul>
    </>
  );
}

export { CommonlyUsedSection };
