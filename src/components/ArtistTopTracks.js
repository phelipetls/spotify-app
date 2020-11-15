import React from "react";

import { List, Typography, ListItemSecondaryAction } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

import axios from "axios";
import { useSpotifyQuery } from "./hooks/spotify-query";

import { SpotifyListItem } from "./SpotifyListItem";
import { AddToPlaylistButton } from "./AddToPlaylistButton";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  title: {
    marginTop: theme.spacing(2)
  }
}));

export function ArtistTopTracks({ id, name }) {
  const classes = useStyles();

  const searchParams = new URLSearchParams([
    ["country", navigator.language.slice(0, 2)]
  ]);

  const { isLoading, data } = useSpotifyQuery(
    ["Fetch artist's top tracks", { id }],
    () => axios(`/artists/${id}/top-tracks?${searchParams}`)
  );

  const topTracks =
    data?.data?.tracks.map(track => ({
      id: track.id,
      image: track.album.images[0],
      title: track.name,
      subtitle: track.album.name,
      type: track.type
    })) || [];

  return (
    <>
      <Typography
        variant="h5"
        component="h2"
        gutterBottom
        className={classes.title}
      >
        {name ? `Top Faixas de ${name}` : <Skeleton />}
      </Typography>

      <List>
        {topTracks.map(track => (
          <SpotifyListItem key={track.id} isLoading={isLoading} item={track}>
            <ListItemSecondaryAction>
              <AddToPlaylistButton tracks={[track.id]} />
            </ListItemSecondaryAction>
          </SpotifyListItem>
        ))}
      </List>
    </>
  );
}
