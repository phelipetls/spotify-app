import React from "react";

import { Grid } from "@material-ui/core";

import { Route, Redirect } from "react-router-dom";
import { Navigation } from "./Navigation";
import { useAuth } from "../context/spotify-auth";

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
            <Grid item className={classes.flexGrow}>
              <Component />
            </Grid>

            <Navigation />
          </Grid>
        </>
      ) : (
        <Redirect to="/login" />
      )}
    </Route>
  );
}
