import ReactDOM from 'react-dom/client';
import { app } from './app/App';

// eslint-disable-next-line no-undef
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement!);

root.render(app);
