import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "antd/dist/antd.css";
import "./index.css";

import MainPage from "./pages/MainPage";
import NotFoundPage from "./pages/NotFoundPage";
import AttributionPage from "./pages/AttributionPage";
import TermsOfUsePage from "./pages/TermsOfUsePage";
import AccessibilityPolicyPage from "./pages/AccessibilityPolicyPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import ContractingPage from "./pages/ContractingPage";
import NotFoundNoRoutingPage from "./pages/NotFoundNoRoutingPage";

import reportWebVitals from "./reportWebVitals";
import contactData from "./content/contact";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/attribution" component={AttributionPage} />
        <Route exact path="/terms" component={TermsOfUsePage} />
        <Route exact path="/accessibility" component={AccessibilityPolicyPage} />
        <Route exact path="/privacy" component={PrivacyPolicyPage} />
        <Route
          exact
          path="/resume"
          render={() => {
            window.open(contactData.resume.link);
            return <Redirect to="/" />;
          }}
        />
        <Route exact path="/contract" component={ContractingPage} />
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
