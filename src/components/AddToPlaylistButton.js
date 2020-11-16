import React, { useState } from "react";

import { Menu, MenuItem, IconButton } from "@material-ui/core";
import { PlaylistAdd } from "@material-ui/icons";

import { usePlaylists } from "./context/playlists";

export function AddToPlaylistButton({ tracks, ...rest }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const { playlists, dispatch } = usePlaylists();

  const handleClick = e => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = id => {
    setAnchorEl(null);
    dispatch({ type: "addTracksToPlaylist", payload: { id, tracks } });
  };

  const handlePlaylistCreation = () => {
    dispatch({ type: "addPlaylist" });
  };

  return (
    <>
      <IconButton
        edge="end"
        aria-label="adicione à playlist"
        onClick={handleClick}
        title="Adicione a uma playlist"
        {...rest}
      >
        <PlaylistAdd />
      </IconButton>

      <Menu
        id="playlists-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handlePlaylistCreation}>
          Criar nova playlist
        </MenuItem>

        {playlists.length > 0 &&
          playlists.map(playlist => (
            <MenuItem onClick={() => handleClose(playlist.id)}>
              {playlist.name}
            </MenuItem>
          ))}
      </Menu>
    </>
  );
}
