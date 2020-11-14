import React from "react";

import {
  ListItem,
  ListItemSecondaryAction,
  IconButton
} from "@material-ui/core";
import { Delete } from "@material-ui/icons";

import { usePlaylists } from "./context/playlists";

import { EditablePlaylistName } from "./EditablePlaylistName";

export function PlaylistsListItems() {
  const { playlists, removePlaylist } = usePlaylists();

  return playlists.map(playlist => (
    <ListItem>
      <EditablePlaylistName initialText={playlist.name} />

      <ListItemSecondaryAction>
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() => removePlaylist(playlist.id)}
        >
          <Delete />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  ));
}
