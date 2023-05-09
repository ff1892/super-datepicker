import { IAction, IState } from '../../types';
import { Action } from './actions';
import { DateMode } from './state';

export const reducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case Action.ChangeTime:
      if (state.dateMode === DateMode.Start) {
        return {
          ...state,
          date: {
            ...state.date,
            start: action.payload as Date,
          },
          datesValid: action.payload < state.date.end,
        };
      }
      return {
        ...state,
        date: {
          ...state.date,
          end: action.payload as Date,
        },
        datesValid: action.payload > state.date.start,
      };
    case Action.SetStartTime:
      return {
        ...state,
        date: {
          ...state.date,
          start: action.payload as Date,
        },
      };
    case Action.SetEndTime:
      return {
        ...state,
        date: {
          ...state.date,
          end: action.payload as Date,
        },
      };
    case Action.OpenQuickSelection:
      return {
        ...state,
        modals: {
          ...state.modals,
          quickSelectionShown: true,
          popoverShown: false,
        },
      };
    case Action.CloseQuickSelection:
      return {
        ...state,
        modals: {
          ...state.modals,
          quickSelectionShown: false,
        },
      };
    case Action.OpenPopover:
      return {
        ...state,
        modals: {
          ...state.modals,
          quickSelectionShown: false,
          popoverShown: true,
        },
      };
    case Action.ClosePopover:
      return {
        ...state,
        modals: {
          ...state.modals,
          popoverShown: false,
        },
      };
    case Action.ChangeDateMode:
      return {
        ...state,
        dateMode: action.payload.toString(),
      };
    case Action.ChangeStartTimeMode:
      return {
        ...state,
        timeMode: {
          ...state.timeMode,
          start: action.payload.toString(),
        },
      };
    case Action.ChangeEndTimeMode:
      return {
        ...state,
        timeMode: {
          ...state.timeMode,
          end: action.payload.toString(),
        },
      };
    case Action.ChangeCalendarMode:
      return {
        ...state,
        calendarMode: action.payload.toString(),
      };
    case Action.SetPrettyLabel:
      return {
        ...state,
        prettyLabel: action.payload.toString(),
      };
    default:
      return state;
  }
};
