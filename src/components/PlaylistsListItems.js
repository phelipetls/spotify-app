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
  const { playlists, dispatch } = usePlaylists();

  return playlists.map(playlist => (
    <ListItem key={playlist.id}>
      <EditablePlaylistName id={playlist.id} initialText={playlist.name} />

      <ListItemSecondaryAction>
        <IconButton
          edge="end"
          aria-label="delete"
          data-testid="delete-playlist-button"
          onClick={() =>
            dispatch({ type: "remove", payload: { id: playlist.id } })
          }
        >
          <Delete />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  ));
}
