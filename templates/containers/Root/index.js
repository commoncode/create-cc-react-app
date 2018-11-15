import { Provider } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import React from "react";
import PropTypes from "prop-types";

import PrivateRoute from "../PrivateRoute";
import Home from "../Home";
import Login from "../Login";
import theme from "../../constants/theme";

const Root = ({ store }) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Switch>
          <PrivateRoute exact path="/" component={Home} />

          <Route exact path="/login" component={Login} />
          <Redirect to={{ pathname: "/login" }} />
        </Switch>
      </React.Fragment>
    </ThemeProvider>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object,
};

export default Root;
