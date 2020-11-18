import React from "react";

import { Grid } from "@material-ui/core";

import { useAuth } from "../context/auth";

import { NavigationBottom } from "./NavigationBottom";
import { NavigationTop } from "./NavigationTop";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    height: "100%"
  },
  flexGrow: {
    flex: 1,
    overflow: "auto",
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
    "-ms-overflow-style": "none",
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": {
      display: "none"
    }
  }
}));

export function AppLayout({ children }) {
  const classes = useStyles();

  const { token } = useAuth();

  // When unauthenticated, do not apply any layout
  if (!token) {
    return children;
  }

  return (
    <Grid
      container
      direction="column"
      wrap="nowrap"
      className={classes.container}
    >
      <NavigationTop />

      <Grid item className={classes.flexGrow}>
        {children}
      </Grid>

      <NavigationBottom />
    </Grid>
  );
}

export default AppLayout;
