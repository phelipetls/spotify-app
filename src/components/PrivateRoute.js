import React from "react";

import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../context/spotify-auth";

import { AppLayout } from "./AppLayout";

export function PrivateRoute({ component: Component, ...rest }) {
  const auth = useAuth();

  return (
    <Route {...rest}>
      {auth.token ? (
        <AppLayout><Component /></AppLayout>
      ) : (
        <Redirect to="/login" />
      )}
    </Route>
  );
}
