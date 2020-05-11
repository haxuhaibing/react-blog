import React from 'react';
import { ConfigProvider, DatePicker, message } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import ReactDOM from 'react-dom';

import Home from './pages/home/home'
import Header from './components/Header/index'
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css';
import './assets/scss/common.scss';
ReactDOM.render(
  <React.StrictMode>
  <Header/>
  <Home/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
