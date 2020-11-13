import React from "react";

import { Grid } from "@material-ui/core";

import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../context/spotify-auth";

import { NavigationBottom } from "./NavigationBottom";
import { NavigationTop } from "./NavigationTop";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    height: "100%"
  },
  flexGrow: {
    flex: 1
  }
}));

export function PrivateRoute({ component: Component, ...rest }) {
  const classes = useStyles();

  const auth = useAuth();

  return (
    <Route {...rest}>
      {auth.token ? (
        <>
          <Grid container direction="column" className={classes.container}>
            <NavigationTop />

            <Grid item className={classes.flexGrow}>
              <Component />
            </Grid>

            <NavigationBottom />
          </Grid>
        </>
      ) : (
        <Redirect to="/login" />
      )}
    </Route>
  );
}
