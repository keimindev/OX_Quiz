import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import {Provider} from 'react-redux'
import store from './redux/quizConfig';
import './index.css';
import App from './App';
import "./language/i18n"

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

