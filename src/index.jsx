import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "antd/dist/antd.css";
import "./index.css";

import MainPage from "./pages/MainPage";
import NotFoundPage from "./pages/NotFoundPage";
import AttributionPage from "./pages/AttributionPage";
import TermsOfUsePage from "./pages/TermsOfUsePage";
import AccessibilityPolicyPage from "./pages/AccessibilityPolicyPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import NotFoundNoRoutingPage from "./pages/NotFoundNoRoutingPage";
import ResumePage from "./pages/ResumePage";

import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/" component={MainPage} exact />
        <Route path="/attribution" component={AttributionPage} exact />
        <Route path="/terms" component={TermsOfUsePage} exact />
        <Route path="/accessibility" component={AccessibilityPolicyPage} exact />
        <Route path="/privacy" component={PrivacyPolicyPage} exact />
        <Route path="/resume" component={ResumePage} exact />
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
