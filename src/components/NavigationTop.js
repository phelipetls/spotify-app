import React from "react";

import {
  Grid,
  Paper,
  Avatar,
  Typography,
  IconButton,
  Link,
  AppBar,
  Toolbar
} from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import { PowerSettingsNew } from "@material-ui/icons";
import { Link as RouterLink } from "react-router-dom";

import axios from "axios";
import { useSpotifyQuery } from "./hooks/spotify-query";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  avatar: {
    marginRight: theme.spacing(2)
  },
  username: {
    minWidth: "14ch"
  },
  accountType: {
    fontSize: "small",
    minWidth: "10ch"
  }
}));

export function NavigationTop() {
  const classes = useStyles();

  const { isLoading, data = {} } = useSpotifyQuery("Fetch user data", () =>
    axios.get("me")
  );

  const { display_name: name, images, product } = data?.data || {};

  const imageUrl = (images && images[0].url) || "";

  const avatar = isLoading ? (
    <Skeleton variant="circle" className={classes.avatar}>
      <Avatar />
    </Skeleton>
  ) : (
    <Avatar
      alt={`${name}'s avatar`}
      src={imageUrl}
      className={classes.avatar}
    />
  );

  const username = (
    <Typography
      component="h1"
      variant="h6"
      data-testid="user-name"
      className={classes.username}
    >
      {isLoading ? <Skeleton /> : name}
    </Typography>
  );

  const plan = (
    <Typography
      color="textSecondary"
      variant="subtitle1"
      className={classes.accountType}
    >
      {isLoading ? (
        <Skeleton />
      ) : (
        `Plano: ${product === "open" ? "Free" : product}`
      )}
    </Typography>
  );

  return (
    <AppBar component={Paper} color="inherit" position="static">
      <Toolbar component={Grid}>
        <Grid item container alignItems="center">
          {avatar}
          <Grid item>
            {username}
            {plan}
          </Grid>
        </Grid>

        <Link component={RouterLink} to="/logout" title="Logout">
          <IconButton>
            <PowerSettingsNew />
          </IconButton>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
