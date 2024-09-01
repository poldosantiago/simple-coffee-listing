import React from 'react';
import ReactDOM from 'react-dom/client';
import './base/base.css';
import AppRoutes from './routes';

// const root = ReactDOM.createRoot(document.getElementById('root'));
const rootElement = document.getElementById('root');
if(!rootElement){throw new Error('Failed to find the root element');}
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);