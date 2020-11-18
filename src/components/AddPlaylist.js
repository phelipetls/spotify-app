import React from "react";

import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { Add } from "@material-ui/icons";

import { usePlaylists } from "../context/playlists";

export function AddPlaylist() {
  const { dispatch } = usePlaylists();

  return (
    <ListItem
      button
      onClick={() => dispatch({ type: "addPlaylist" })}
      data-testid="add-playlist-button"
    >
      <ListItemIcon>
        <Add />
      </ListItemIcon>
      <ListItemText primary="Adicionar playlist" />
    </ListItem>
  );
}
