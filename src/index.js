import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createAppStore } from './store/config/storeConfig';
import { Provider } from 'react-redux';
const root = ReactDOM.createRoot(document.getElementById('root'));

//creamos el store para pasarselo después al provider
let appStore = createAppStore();
// tenemos que meter todo el render dentro de provider, para proporcionar el store a tod
root.render(
  <Provider store={appStore}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
