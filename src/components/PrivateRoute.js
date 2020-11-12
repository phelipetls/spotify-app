import React from "react";

import { Route, Redirect } from "react-router-dom";
import { Navigation } from "./Navigation";
import { useAuth } from "../context/spotify-auth";

export function PrivateRoute({ component: Component, ...rest }) {
  let auth = useAuth();

  return (
    <Route {...rest}>
      {auth.token ? (
        <>
          <Component />
          <Navigation />
        </>
      ) : (
        <Redirect to="/login" />
      )}
    </Route>
  );
}
