import { TimeUnitShort } from '../constants/common';

// Возвращает полный unitTime
// 'm' --> 'Minutes'
// 'y' --> 'Years'

export const getUnit = (shortUnit: string) => {
  let unit = '';
  Object.entries(TimeUnitShort).forEach(([key, value]) => {
    if (value === shortUnit) {
      unit = key;
    }
  });
  return unit;
};
