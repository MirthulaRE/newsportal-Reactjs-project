
// index.tsx (or index.js)
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';  // Import your App component
import './index.css'; // Import your CSS if needed

ReactDOM.render(
  <React.StrictMode>
    <App />  
  </React.StrictMode>,
  document.getElementById('root')
);
