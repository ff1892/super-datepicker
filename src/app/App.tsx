import { StrictMode } from 'react';
import { SuperDatePicker } from '../ui/superDatePicker';
import '../style/global.scss';

function App() {
  return <SuperDatePicker />;
}

const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

export { app };
