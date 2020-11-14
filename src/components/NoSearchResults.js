import React from "react";

import { Grid, Typography } from "@material-ui/core";
import { Search } from "@material-ui/icons";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flex: 1
  }
}));

export function NoSearchResults({ title }) {
  const classes = useStyles();

  return (
    <Grid
      container
      item
      alignItems="center"
      justify="center"
      direction="column"
      className={classes.root}
    >
      <Grid item>
        <Search fontSize="large" />
      </Grid>

      <Grid item>
        <Typography variant="body1">{title}</Typography>
      </Grid>
    </Grid>
  );
}
