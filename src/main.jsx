import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import i18next from 'i18next';
import './i18n/i18n.js';

i18next.init().then(() => {
  const rootElement = document.getElementById('root');
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});
