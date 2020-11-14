import React from "react";

import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  Link
} from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  cardContainer: {
    // spacing between cards. Using Material-UI spacing prop causes the card to
    // overflow its parent.
    margin: `0 ${theme.spacing(0.5)}px`,
    "&:first-child": {
      marginLeft: 0
    }
  },
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
    padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`
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
      {isLoading ? (
        <Skeleton />
      ) : (
        <Link
          href={item.spotify_url}
          underline="none"
          color="inherit"
          title={`Ouça ${item.title} no Spotify`}
        >
          {item.title}
        </Link>
      )}
    </Typography>
  );

  const subtitle = item.subtitle && (
    <Typography variant="subtitle2" color="textSecondary" noWrap>
      {isLoading ? <Skeleton /> : item.subtitle}
    </Typography>
  );

  return (
    <Grid item className={classes.cardContainer}>
      <Card className={classes.card}>
        {img}
        <CardContent className={classes.content}>
          {title}
          {subtitle}
        </CardContent>
      </Card>
    </Grid>
  );
}
