import { StrictMode } from 'react';
import { SuperDatePicker } from '../ui/superDatePicker';

function App() {
  return <SuperDatePicker />;
}

const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

export { app };
