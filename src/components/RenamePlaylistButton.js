import React from "react";

export function RenamePlaylistButton({ id }) {
  return <IconButton
    edge="end"
    aria-label="edit"
    data-testid="edit-playlist-button"
    onClick={() =>
        dispatch({ type: "renamePlaylist", payload: { id: playlist.id } })
    }
  >
    <Delete />
  </IconButton>
}
