import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import "./style.css";
import Home from "./views/home";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Home} path="/:page" />
        <Redirect to="/first" />
      </Switch>

      <ToastContainer />
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
