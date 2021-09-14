import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import animate from './components/animatedindex'


animate()

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

