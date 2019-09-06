// React
import React from "react";

import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";

// Layouts
import General from "layouts/General";

import Auth from "layouts/Auth";

// Styles
import "assets/vendor/nucleo/css/nucleo.css";

import "assets/vendor/@fortawesome/fontawesome-free/css/all.min.css";

import "assets/scss/argon-dashboard-react.scss";

const validToken = true;

const App = () => (
  <BrowserRouter>
    <Switch>
      {/* <Route path="/" component={() => <h1>Home</h1>} /> */}

      <Route path="/auth" render={props => <Auth {...props} />} />

      {validToken ? (
        <Route path="/general" render={props => <General {...props} />} />
      ) : (
        <Redirect to="/auth" />
      )}

      <Route
        path="*"
        component={() => <h1>404 - Page not found or you don't have access</h1>}
      />

      <Redirect to="/general" />
    </Switch>
  </BrowserRouter>
);

export default App;
