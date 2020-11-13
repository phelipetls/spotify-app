import React from "react";

import { Typography, Grid } from "@material-ui/core";
import ScrollContainer from "react-indiana-drag-scroll";

import { SpotifyGridItem } from "./SpotifyGridItem";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  sectionTitle: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  }
}));

export function SpotifyGrid(props) {
  const classes = useStyles();

  const { title, items } = props;

  return (
    <>
      <Typography variant="h5" component="h2" className={classes.sectionTitle}>
        {title}
      </Typography>

      <Grid container wrap="nowrap" component={ScrollContainer}>
        {items.map(item => (
          <SpotifyGridItem key={item.id} item={item} />
        ))}
      </Grid>
    </>
  );
}
