import React from "react";

import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../context/auth";

export function PrivateRoute({ component: Component, ...rest }) {
  const { token } = useAuth();

  return (
    <Route {...rest}>{token ? <Component /> : <Redirect to="/login" />}</Route>
  );
}
