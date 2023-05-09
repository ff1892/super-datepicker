import { fullDateRegex } from '../constants/common';

class Validator {

  getIsFullDateValid(dateStr: string) {
    const isValidStr = fullDateRegex.test(dateStr);
    const parsedDate = new Date(Date.parse(dateStr));
    const isValidDate = parsedDate.toDateString() !== 'Invalid Date';
    return isValidStr && isValidDate;

  }
}

export const validator = new Validator();
