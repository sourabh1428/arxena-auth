import { createRoot } from 'react-dom/client';
import App from './Components/App.js';
import { BrowserRouter } from 'react-router-dom';

const root = document.getElementById('root');
const rootElement = createRoot(root);

rootElement.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
