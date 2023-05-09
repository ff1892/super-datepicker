export type TPayload = string | number | boolean | Date;

export interface IAction {
  type: string,
  payload: TPayload,
}

export interface IState {
  date: {
    start: Date,
    end: Date,
  }
  modals: {
    quickSelectionShown: boolean,
    popoverShown: boolean,
  }
  dateMode: string,
  timeMode: {
    start: string,
    end: string,
  }
  calendarMode: string,
  datesValid: boolean,
  prettyLabel: string,
}
