import ReactDOM from 'react-dom/client';
import { app } from './app/App';

const rootElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

root.render(app)
