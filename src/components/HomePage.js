import React from "react";

import { Grid, Avatar, Typography } from "@material-ui/core";
import { useSpotifyQuery } from "./hooks/spotify-query";

import { FullPageLoading } from "./FullPageLoading";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  avatar: {}
}));

export function HomePage() {
  const classes = useStyles();

  const { isLoading, data } = useSpotifyQuery("Fetch user data", {
    endpoint: "me"
  });

  if (isLoading) {
    return <FullPageLoading />;
  }

  const { display_name: userName, images } = data;

  const imageUrl = images[0].url;

  return (
    <Grid container alignItems="center">
      <Typography component="h1" variant="h4" data-testid="user-name">
        {userName}
      </Typography>
    </Grid>
  );
}
