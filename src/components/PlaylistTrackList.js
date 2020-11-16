import React from "react";

import {
  Link,
  List,
  Avatar,
  ListItem,
  ListItemText,
  ListItemAvatar,
  ListItemSecondaryAction
} from "@material-ui/core";

import axios from "axios";
import { useSpotifyQuery } from "./hooks/spotify-query";

import { SpotifyListSkeleton } from "./SpotifyListSkeleton";
import { AddToPlaylistButton } from "./AddToPlaylistButton";

import { formatDuration } from "./utils/formatDuration";

export function PlaylistTrackList({ id, tracks }) {
  // Get only 50 first tracks, as it is the API limit
  const searchParams = new URLSearchParams([
    ["ids", tracks.slice(0, 50).join(",")]
  ]);

  const { isLoading, data = {} } = useSpotifyQuery(
    ["Get tracks in playlist", id],
    () => axios.get("/tracks?" + searchParams)
  );

  return isLoading ? (
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

        const artistName = track.artists[0].name;
        const albumName = track.album.name;
        const duration = formatDuration(track.duration_ms);

        const subtitle = `${duration} · ${albumName} · ${artistName}`;

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
  );
}
