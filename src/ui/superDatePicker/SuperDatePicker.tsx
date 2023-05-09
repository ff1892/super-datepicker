import { StoreProvider } from './store/provider';
import { SuperDatePickerLayout } from './layout';

function SuperDatePicker() {

  return (
    <StoreProvider>
      <SuperDatePickerLayout />
    </StoreProvider>
  );
}

export { SuperDatePicker };
