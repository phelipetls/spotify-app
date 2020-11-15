import React from "react";

import { Typography, List, ListItem, Divider } from "@material-ui/core";

import { usePlaylists } from "./context/playlists";

import { AddPlaylist } from "./AddPlaylist";
import { PlaylistsListItem } from "./PlaylistsListItem";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  playlistItem: {
    "&:hover": {
      color: theme.palette.primary.main
    }
  },
  divider: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  }
}));

export function Playlists() {
  const classes = useStyles();

  const { playlists } = usePlaylists();

  return (
    <>
      <Typography
        align="center"
        color="primary"
        variant="h4"
        component="h1"
        gutterBottom
      >
        Playlists
      </Typography>

      <List aria-label="Lista de playlists">
        <AddPlaylist />

        <Divider className={classes.divider} />

        {playlists.map(playlist => (
          <ListItem key={playlist.id} className={classes.playlistItem}>
            <PlaylistsListItem name={playlist.name} id={playlist.id} />
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default Playlists;
