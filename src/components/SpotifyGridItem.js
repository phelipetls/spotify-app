import React from "react";

import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Grid
} from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

import { Link as RouterLink } from "react-router-dom";

import { AddToPlaylistButton } from "./AddToPlaylistButton";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  card: {
    width: "126px",
    "&:hover": {
      backgroundColor: theme.palette.action.hover
    }
  },
  img: {
    height: "110px",
    width: "110px",
    margin: theme.spacing(1)
  },
  content: {
    padding: `${theme.spacing(0.5)}px ${theme.spacing(1)}px`
  }
}));

export function SpotifyGridItem(props) {
  const classes = useStyles();

  const { item, isLoading } = props;

  const img = isLoading ? (
    <Skeleton variant="rect" className={classes.img} />
  ) : (
    <CardMedia
      component="img"
      src={item.image.url}
      title={item.name}
      className={classes.img}
    />
  );

  const title = (
    <Typography variant="subtitle1" color="textPrimary" noWrap>
      {isLoading ? <Skeleton /> : item.title}
    </Typography>
  );

  const subtitle = item.subtitle && (
    <Typography variant="subtitle2" color="textSecondary" noWrap>
      {isLoading ? <Skeleton /> : item.subtitle}
    </Typography>
  );

  const gridItem = (
    <Grid item className={classes.cardContainer}>
      <Card className={classes.card}>
        {img}
        <CardContent className={classes.content}>
          {title}
          {subtitle}
        </CardContent>
        {/* Allow add to playlist button if showing a track */}
        {item.type === "track" && (
          <CardActions>
            <AddToPlaylistButton tracks={[item.id]} size="small" />
          </CardActions>
        )}
      </Card>
    </Grid>
  );

  // Wrap around a link only for albums and artists. Tracks do not have a
  // route
  return item.type === "track" ? (
    gridItem
  ) : (
    <RouterLink
      to={`/${item.type}/${item.id}`}
      underline="none"
      color="inherit"
    >
      {gridItem}
    </RouterLink>
  );
}
