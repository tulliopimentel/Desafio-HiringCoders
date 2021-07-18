import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navigation from './navbar/index'
import Promo from './promo'
import 'bootstrap/dist/css/bootstrap.min.css';
import NewsLetter from './newsletter';

ReactDOM.render(
  <React.StrictMode>
    <Navigation />
    <Promo />
    <App />
    <NewsLetter />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
