import React, { useContext } from "react";

import { ThemeProvider } from "@material-ui/styles";

import theme from "./theme";

import { BrowserRouter as Router, Switch } from "react-router-dom";

import { AuthenticationContext } from "./states";

import {
  authenticationMiddleware,
  checkTokenExpiration,
  redirectWrapperNotLogged,
  redirectWrapperNotFound
} from "./authentication";

const Application = () => {
  const { authentication } = useContext(AuthenticationContext);

  const tokenExpiration = checkTokenExpiration({
    expireAt: authentication.expireAt
  });

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          {authenticationMiddleware({ authentication })}
          {redirectWrapperNotLogged({
            invalid: tokenExpiration.invalid,
            expired: tokenExpiration.expired,
            pathname: "/login",
            state: {
              expired: tokenExpiration.expired,
              invalid: tokenExpiration.invalid
            }
          })}
          {redirectWrapperNotFound({
            pathname: "/dashboard",
            state: {}
          })}
          />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default Application;
