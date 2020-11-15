import React, { useState, useEffect } from "react";

import { ListItemText, TextField } from "@material-ui/core";
import { usePlaylists } from "./context/playlists";

export function EditablePlaylistName({ id, initialText }) {
  const [name, setName] = useState(initialText);
  const [isEditing, setIsEditing] = useState(false);

  const { dispatch } = usePlaylists();

  const handleChange = e => setName(e.target.value);

  useEffect(() => {
    dispatch({ type: "renamePlaylist", payload: { id, newName: name } });
  }, [name]);

  const handleKeyDown = e => {
    if (["Enter", "Escape"].includes(e.code)) {
      e.target.blur();
    }
  };

  return isEditing ? (
    <TextField
      required
      fullWidth
      defaultValue={initialText}
      value={name}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      inputProps={{
        onBlur: () => setIsEditing(false)
      }}
    />
  ) : (
    <ListItemText
      primary={name}
      onClick={() => setIsEditing(true)}
      tabIndex={1100}
    />
  );
}
