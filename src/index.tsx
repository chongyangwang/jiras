/*
 * @Description: 
 * @Author: cy2020
 * @Date: 2021-08-03 14:21:06
 * @LastEditTime: 2021-08-09 09:40:36
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {loadDevTools} from 'jira-dev-tool'
// 覆盖jira-dev-tool的antd样式
import 'antd/dist/antd.less'
import { AppProviders } from 'context'

loadDevTools(()=>{
  ReactDOM.render(
    <React.StrictMode>
      <AppProviders>
        <App />
      </AppProviders>
    </React.StrictMode>,
    document.getElementById('root')
  );
})

/* <Context.Provider>
  <App></App>
</Context.Provider> */
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
