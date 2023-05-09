import { IState } from '../../types';

const currentDate = new Date();

export const DateMode = {
  Start: 'Start',
  End: 'End',
  None: 'None',
};

export const TimeMode = {
  Absolute: 'Absolute',
  Relative: 'Relative',
  Now: 'Now',
};

export const CalendarMode = {
  Calendar: 'Calendar',
  Month: 'Month',
  Year: 'Year',
};

export const initialState: IState = {
  date: {
    start: new Date(currentDate.getTime() - (30 * 60 * 1000)),
    end: currentDate,
  },
  modals: {
    quickSelectionShown: false,
    popoverShown: false,
  },
  dateMode: DateMode.None,
  timeMode: {
    start: TimeMode.Relative,
    end: TimeMode.Relative,
  },
  calendarMode: CalendarMode.Calendar,
  datesValid: true,
  prettyLabel: 'Last 30 minutes',
};
