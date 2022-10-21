import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import Normalize from 'react-normalize';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Normalize/>
    <App />
  </React.StrictMode>
);