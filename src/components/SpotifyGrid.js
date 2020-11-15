import React from "react";

import { Typography, Grid } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

import ScrollContainer from "react-indiana-drag-scroll";

import { SpotifyGridItem } from "./SpotifyGridItem";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  sectionTitle: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  }
}));

const placeholderItems = [{ id: 1 }, { id: 2 }, { id: 3 }];

export function SpotifyGrid(props) {
  const classes = useStyles();

  const { title, items, isLoading } = props;

  const gridItems = isLoading ? placeholderItems : items;

  return (
    <>
      <Typography variant="h5" component="h2" className={classes.sectionTitle}>
        {isLoading ? <Skeleton /> : title}
      </Typography>

      <Grid container wrap="nowrap" component={ScrollContainer}>
        {gridItems.map(item => (
          <SpotifyGridItem key={item.id} item={item} isLoading={isLoading} />
        ))}
      </Grid>
    </>
  );
}
