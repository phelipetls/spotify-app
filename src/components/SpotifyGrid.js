import React from "react";

import { Grid } from "@material-ui/core";

import ScrollContainer from "react-indiana-drag-scroll";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    // spacing between cards. Using Material-UI spacing prop causes the card to
    // overflow its parent.
    "& > *": {
      color: "inherit",
      textDecoration: "none",
      margin: `0 ${theme.spacing(0.5)}px`,
      "&:first-child": {
        marginLeft: 0
      }
    }
  }
}));

export function SpotifyGrid({ children }) {
  const classes = useStyles();

  return (
    <Grid
      container
      wrap="nowrap"
      component={ScrollContainer}
      className={classes.root}
    >
      {children}
    </Grid>
  );
}
