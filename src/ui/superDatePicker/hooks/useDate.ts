import { useStore } from './useStore';
import { DateMode } from '../store/state';

export const useDate = (): Date => {
  const { store } = useStore();
  const { date, dateMode } = store;
  switch (dateMode) {
    case DateMode.Start:
      return date.start;
    case DateMode.End:
      return date.end;
    default:
      return new Date('2000-01-01');
  }
};
