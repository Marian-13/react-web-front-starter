import "./global/fonts.scss";
import "./global/stylesheets.scss";
import "./global/javascripts";

import React from "react";
import { Provider } from "react-redux"
import { BrowserRouter as Router, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route path="/" component={LoginPage} />
    </Router>
  </Provider>
);

export default Root;
