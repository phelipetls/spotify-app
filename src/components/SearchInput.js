import React from "react";

import { TextField } from "@material-ui/core";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  search: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(1),
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.paper
  },
  searchInput: {}
}));

export function SearchInput({ query, handleChange }) {
  const classes = useStyles();

  return (
    <TextField
      required
      fullWidth
      value={query}
      onChange={handleChange}
      margin="dense"
      type="text"
      label="Pesquisar"
      variant="outlined"
      className={classes.search}
      inputProps={{
        className: classes.searchInput
      }}
    />
  );
}
