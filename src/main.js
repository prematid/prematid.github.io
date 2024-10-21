import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Get the root element where React will render the app
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// Render the App component within a StrictMode wrapper
root.render(
  React.createElement(
    React.StrictMode,
    null,
    React.createElement(App, null)
  )
);




// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
