import { PropsWithChildren, useReducer } from 'react';
import { StateContext, DispatchContext } from './context';
import { reducer } from './reducers';
import { initialState } from './state';

function StoreProvider({ children }: PropsWithChildren<{}>): JSX.Element {
  const [store, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={store}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export { StoreProvider };
