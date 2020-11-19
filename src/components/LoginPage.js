import React from "react";

import { Grid, Typography, Link, Button } from "@material-ui/core";
import { Redirect } from "react-router-dom";

import { getAuthUrl } from "../utils/spotify-auth-url";
import { useAuth } from "../context/auth";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    height: "100%"
  }
}));

/**
 * Component mainly responsible to show a Login button which will point to a
 * Spotify Accounts Service URL for authorization.
 *
 * If/when the user authorizes, that location will redirect to /auth with
 * additional information such as the access token.
 *
 * Check the getAuthUrl for how the Spotify URL is built.
 *
 * This uses the Implicit Grant Flow method of authorization. 
 * @see https://developer.spotify.com/documentation/general/guides/authorization-guide/#implicit-grant-flow
 */
export function LoginPage() {
  const classes = useStyles();

  const { token } = useAuth();
  const authUrl = getAuthUrl();

  if (token) {
    return <Redirect to="/" />;
  }

  return (
    <Grid
      container
      alignItems="center"
      justify="center"
      direction="column"
      className={classes.container}
    >
      <Typography component="h1" variant="h4" gutterBottom>
        My Playlists
      </Typography>

      <Link href={authUrl}>
        <Button variant="contained" color="primary" data-testid="login-button">
          Login
        </Button>
      </Link>
    </Grid>
  );
}

export default LoginPage;
