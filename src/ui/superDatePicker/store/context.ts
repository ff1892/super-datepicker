import { Dispatch, createContext } from 'react';
import { TPayload, IState } from '../../types';

export const StateContext = createContext<IState>({} as IState);
export const DispatchContext = createContext<Dispatch<{
  type: string, payload?: TPayload}>>(() => {});
