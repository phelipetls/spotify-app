import React, { useState } from "react";

import { Menu, MenuItem, IconButton } from "@material-ui/core";
import { PlaylistAdd } from "@material-ui/icons";

import { usePlaylists } from "./context/playlists";

export function AddToPlaylistButton({ items }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const { playlists, addTracksToPlaylist } = usePlaylists();

  const handleClick = e => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = (id, track) => {
    setAnchorEl(null);
    addTracksToPlaylist(id, track);
  };

  return (
    <>
      <IconButton
        edge="end"
        aria-label="adicione à playlist"
        onClick={handleClick}
        title="Adicione a uma playlist"
      >
        <PlaylistAdd />
      </IconButton>

      <Menu
        id="playlists-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {playlists.map(playlist => (
          <MenuItem onClick={() => handleClose(playlist.id, items)}>
            {playlist.name}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
