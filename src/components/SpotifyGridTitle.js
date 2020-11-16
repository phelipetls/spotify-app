import React from "react";

import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  }
}));

export function SpotifyGridTitle({ children, ...rest }) {
  const classes = useStyles();

  return (
    <Typography variant="h5" component="h2" className={classes.root} {...rest}>
      {children}
    </Typography>
  );
}
