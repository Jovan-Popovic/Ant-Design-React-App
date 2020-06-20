import React from "react";
import { Route, Redirect } from "react-router-dom";
import { auth } from "./AuthService";

export const PrivateRoute = (props) => {
  let Component = props.component;
  let isAuthenticated = auth.getAuthStatus();
  return (
    <Route
      render={(props) =>
        isAuthenticated ? <Component /> : <Redirect to="/login" />
      }
    />
  );
};
