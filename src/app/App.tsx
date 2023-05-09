import { StrictMode } from 'react';
import { SuperDatePicker } from '../ui/superDatePicker';
import '../style/global.scss';

function App() {

  return (
    <>
      <h1>Super Date Picker</h1>
      <SuperDatePicker />
    </>
  );
}

const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

export { app };
