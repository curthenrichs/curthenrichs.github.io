import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "antd/dist/antd.css";
import "./index.css";

import MainPage from "./pages/MainPage";
import CoursesPage from "./pages/CoursesPage";
import NotFoundPage from "./pages/NotFoundPage";
import IconLicensesPage from "./pages/IconLicensesPage";
import NotFoundNoRoutingPage from "./pages/NotFoundNoRoutingPage";

import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/" component={MainPage} exact />
        <Route path="/icon-licenses" component={IconLicensesPage} exact />
        <Route path="/resume" component={NotFoundPage} exact />
        <Route path="/courses" component={CoursesPage} exact />
        <Route path="/docs/*" component={NotFoundNoRoutingPage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
