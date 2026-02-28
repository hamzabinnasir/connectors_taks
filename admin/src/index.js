import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import DashboardContextProvider from './context/DashboardContextProvider.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DashboardContextProvider>
      <App />
    </DashboardContextProvider>
  </React.StrictMode>
);
