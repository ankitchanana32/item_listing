import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from "./Store";
import { Provider } from "react-redux";
import Home from "./Containers/Home";

const Routes = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />{" "}
          </Switch>{" "}
        </div>{" "}
      </Router>{" "}
    </Provider>
  );
};

export default Routes;
