import React from "react";

import { Typography, List } from "@material-ui/core";

import { AddPlaylist } from "./AddPlaylist";
import { PlaylistsListItems } from "./PlaylistsListItems";

export function Playlists() {
  return (
    <>
      <Typography
        align="center"
        color="primary"
        variant="h4"
        component="h1"
        gutterBottom
      >
        Playlists
      </Typography>

      <List aria-label="Lista de playlists">
        <AddPlaylist />
        <PlaylistsListItems />
      </List>
    </>
  );
}
