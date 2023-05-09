// import { CALENDAR_MONTHS } from '../constants/calendar';

class DateToStringParser {

  // Возвращает строку типа 'May 7, 2023 @ 12:00:14.497'
  getDateAbs(date: Date) {
    const [day, year, time] = date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: false,
      fractionalSecondDigits: 3,
    }).split(', ');
    return `${day}, ${year} @ ${time}`;
  }

  // Возвращает строку типа '07:01:03.002'
  getTimeAbsFull(date: Date) {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    const milliseconds = date.getMilliseconds().toString().padStart(3, '0');
    return `${hours}:${minutes}:${seconds}.${milliseconds}`;
  }

  // Возвращает строку типа '07:01'
  getTimeAbsShort(date: Date) {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  getDateFromFullStr(str: string) {
    return new Date(Date.parse(str));
  }
}

export const dateToStringParser = new DateToStringParser();
