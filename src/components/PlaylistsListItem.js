import React, { useState, useEffect } from "react";

import {
  Link,
  Typography,
  TextField,
  ListItemText,
  ListItemSecondaryAction,
  IconButton
} from "@material-ui/core";
import { Delete, Edit } from "@material-ui/icons";

import { Link as RouterLink } from "react-router-dom";

import { usePlaylists } from "./context/playlists";

export function PlaylistsListItem({ name: defaultName, id }) {
  const { dispatch } = usePlaylists();

  const [name, setName] = useState(defaultName);
  const [isRenaming, setIsRenaming] = useState(false);

  const handleChange = e => setName(e.target.value);

  useEffect(() => {
    dispatch({ type: "renamePlaylist", payload: { id, newName: name } });
  }, [dispatch, id, name]);

  const handleKeyDown = e => {
    if (e.code === "Enter" || e.code === "Escape") {
      e.target.blur();
    }
  };

  return (
    <>
      {isRenaming ? (
        <TextField
          autoFocus
          required
          value={name}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          inputProps={{
            onBlur: () => setIsRenaming(false)
          }}
        />
      ) : (
        <ListItemText onClick={() => setName(true)} tabIndex={1100}>
          <Link
            underline="none"
            color="inherit"
            title="Clique para ver o conteúdo da playlist"
            component={RouterLink}
            to={`/playlist/${id}`}
          >
            <Typography>{name}</Typography>
          </Link>
        </ListItemText>
      )}

      <ListItemSecondaryAction>
        <IconButton
          edge="end"
          aria-label="rename"
          data-testid="rename-playlist-button"
          onClick={() => setIsRenaming(true)}
        >
          <Edit />
        </IconButton>

        <IconButton
          edge="end"
          aria-label="delete"
          data-testid="delete-playlist-button"
          onClick={() => dispatch({ type: "deletePlaylist", payload: { id } })}
        >
          <Delete />
        </IconButton>
      </ListItemSecondaryAction>
    </>
  );
}
