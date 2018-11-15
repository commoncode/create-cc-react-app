import { Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";
import React from "react";

import { getEmail, isAuthenticated } from "../../selectors/auth";

// Sentry is loaded via CDN in public/index.html
// const setSentryEmail = email => {
//   const sentry = window.Sentry;
//   sentry &&
//     email &&
//     sentry.configureScope(scope => {
//       scope.setUser({ email });
//     });
// };

const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  email,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => {
      // setSentryEmail(email);
      return isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location },
          }}
        />
      );
    }}
  />
);

function mapStateToProps(state) {
  return {
    isAuthenticated: isAuthenticated(state),
    email: getEmail(state),
  };
}

export default connect(mapStateToProps)(PrivateRoute);
