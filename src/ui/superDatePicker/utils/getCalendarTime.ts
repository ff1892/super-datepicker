import { TIME_LIST } from '../constants/calendar';
import { dateToStringParser } from './dateToStringParser';

// Возвращает индекс ближайшего времени на календаре к текущему времени
export const getPreselectedTime = (date: Date) => {
  const currentTime = dateToStringParser.getTimeAbsShort(date);
  for (let i = 0; i <= TIME_LIST.length; i++) {
    if (currentTime < TIME_LIST[i]) {
      return i - 1;
    }
  }
  return TIME_LIST.length - 1;
};

// Возвращает индекс выбранного времени
export const getSelectedTime = (date: Date) => {
  const currentTime = dateToStringParser.getTimeAbsFull(date);
  for (let i = 0; i <= TIME_LIST.length; i++) {
    if (currentTime === `${TIME_LIST[i]}:00.000`) {
      return i;
    }
  }
  return -1;
};
