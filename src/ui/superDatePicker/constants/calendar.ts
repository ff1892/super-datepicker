const WEEK_DAYS = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

export const WEEK_DAYS_SHORT = WEEK_DAYS.map((day) => day.slice(0, 2).toUpperCase());

export const CALENDAR_MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const CALENDAR_WEEKS = 6;
export const YEARS_IN_LIST = 15;

const getTimeList = () => new Array(24)
  .fill(null)
  .map((_v, index) => {
    const hours = index.toString().padStart(2, '0');
    return [`${hours}:00`, `${hours}:30`];
  })
  .flat();

export const TIME_LIST = getTimeList();
