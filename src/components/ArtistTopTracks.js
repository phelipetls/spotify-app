import React from "react";

import {
  Link,
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Typography,
  ListItemSecondaryAction
} from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

import axios from "axios";
import { useSpotifyQuery } from "./hooks/spotify-query";

import { SpotifyListSkeleton } from "./SpotifyListSkeleton";
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

  return (
    <>
      <Typography
        variant="h5"
        component="h2"
        gutterBottom
        className={classes.title}
      >
        {isLoading ? <Skeleton /> : `Top Faixas de ${name}`}
      </Typography>

      {isLoading ? (
        <SpotifyListSkeleton />
      ) : (
        <List>
          {data?.data?.tracks.map(track => {
            const title = (
              <Link
                color="inherit"
                underline="none"
                href={track.external_urls.spotify}
              >
                {track.name}
              </Link>
            );

            const subtitle = (
              <Link
                color="inherit"
                underline="none"
                href={track.album.external_urls.spotify}
              >
                {track.album.name}
              </Link>
            );

            return (
              <ListItem key={track.id}>
                <ListItemAvatar>
                  <Avatar alt={track.name} src={track.album.images[0].url} />
                </ListItemAvatar>

                <ListItemText secondary={subtitle}>{title}</ListItemText>

                <ListItemSecondaryAction>
                  <AddToPlaylistButton tracks={[track.id]} />
                </ListItemSecondaryAction>
              </ListItem>
            );
          })}
        </List>
      )}
    </>
  );
}
