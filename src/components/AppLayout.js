import React from "react";

import { Grid } from "@material-ui/core";

import { NavigationBottom } from "./NavigationBottom";
import { NavigationTop } from "./NavigationTop";

import { makeStyles } from "@material-ui/core/styles";

import { PlaylistsProvider } from "./context/playlists";

const useStyles = makeStyles(theme => ({
  container: {
    height: "100%"
  },
  flexGrow: {
    flex: 1,
    overflow: "auto",
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
    "-ms-overflow-style": "none",
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": {
      display: "none"
    }
  }
}));

export function AppLayout({ children }) {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      wrap="nowrap"
      className={classes.container}
    >
      <NavigationTop />

      <Grid item className={classes.flexGrow}>
        <PlaylistsProvider>{children}</PlaylistsProvider>
      </Grid>

      <NavigationBottom />
    </Grid>
  );
}
