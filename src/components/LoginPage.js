import React from "react";

import { Grid, Typography, Link, Button } from "@material-ui/core";

import { getAuthUrl } from "../utils/spotify-auth-url";

export function LoginPage() {
  const authUrl = getAuthUrl();

  return (
    <Grid container alignItems="center" justify="center" direction="column">
      <div>
        <Typography align="center" variant="h4">
          Spotify playlists
        </Typography>

        <Typography align="center" paragraph>
          Clique no link abaixo para fazer login
        </Typography>
      </div>

      <Link href={authUrl}>
        <Button variant="contained" color="primary">
          Login
        </Button>
      </Link>
    </Grid>
  );
}

export default LoginPage;
