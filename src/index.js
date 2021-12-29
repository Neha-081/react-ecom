import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
//provider is component class which passes tore and gives context to whole application 
import {Provider} from 'react-redux';


import './index.css';
import App from './App';
import store from './redux/store'

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);