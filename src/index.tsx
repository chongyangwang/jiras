/*
 * @Description:
 * @Author: cy2020
 * @Date: 2021-08-03 14:21:06
 * @LastEditTime: 2021-08-12 15:19:15
 */
import "./wdyr";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { DevTools, loadServer } from "jira-dev-tool";
// 覆盖jira-dev-tool的antd样式
import "antd/dist/antd.less";
import { AppProviders } from "context";

loadServer(() => {
  ReactDOM.render(
    <React.StrictMode>
      <AppProviders>
        <DevTools />
        <App />
      </AppProviders>
    </React.StrictMode>,
    document.getElementById("root")
  );
});

/* <Context.Provider>
  <App></App>
</Context.Provider> */
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
