import React, { useState } from "react";

import { ListItemText, TextField } from "@material-ui/core";

export function EditablePlaylistName({ initialText }) {
  const [name, setName] = useState(initialText);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = e => setName(e.target.value);

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
