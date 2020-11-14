import React from "react";

import {
  Grid,
  Avatar,
  Typography,
  IconButton,
  Link,
  AppBar,
  Toolbar
} from "@material-ui/core";
import { PowerSettingsNew } from "@material-ui/icons";
import { Link as RouterLink } from "react-router-dom";

import axios from "axios";
import { useSpotifyQuery } from "./hooks/spotify-query";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  avatar: {
    marginRight: theme.spacing(2)
  },
  accountType: {
    fontSize: "small"
  }
}));

export function NavigationTop() {
  const classes = useStyles();

  const { data = {} } = useSpotifyQuery(
    "Fetch user data",
    () => axios.get("me")
  );

  const { display_name: userName, images, product } = data?.data || {};

  const imageUrl = images && images[0].url;

  return (
    <AppBar color="secondary" position="static">
      <Toolbar component={Grid}>
        <Grid item container alignItems="center">
          <Avatar
            alt={`${userName}'s avatar`}
            src={imageUrl}
            className={classes.avatar}
          />

          <Grid item>
            <Typography component="h1" variant="h6" data-testid="user-name">
              {userName}
            </Typography>

            <Typography
              color="textSecondary"
              variant="subtitle1"
              className={classes.accountType}
            >
              Plano: {product === "open" ? "Free" : product}
            </Typography>
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
