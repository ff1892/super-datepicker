import { useContext } from 'react';
import { StateContext, DispatchContext } from '../store/context';

export const useStore = () => {
  const store = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  return { store, dispatch };
};
