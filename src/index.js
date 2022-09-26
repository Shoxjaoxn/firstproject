import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import TaomProvider from './Context';
import './index.css';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
    <TaomProvider/>
  </React.StrictMode>
);



