import React from "react";

import { Grid, CircularProgress } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%"
  }
}));

export function FullPageLoading() {
  const classes = useStyles();

  return (
    <Grid
      container
      alignItems="center"
      justify="center"
      className={classes.root}
    >
      <CircularProgress />
    </Grid>
  );
}
