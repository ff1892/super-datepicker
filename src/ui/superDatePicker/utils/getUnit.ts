import { TimeUnitShort } from '../constants/common';

export const getUnit = (str: string) => {
  let unit = '';
  Object.entries(TimeUnitShort).forEach(([key, value]) => {
    if (value === str) {
      unit = key;
    }
  });
  return unit;
};
