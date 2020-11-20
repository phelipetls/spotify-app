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

import { SpotifyListSkeleton } from "./SpotifyListSkeleton";
import { AddToPlaylistButton } from "./AddToPlaylistButton";

import { formatDuration } from "./utils/formatDuration";

export function PlaylistTrackList({ id, tracks, isLoading }) {
  return isLoading ? (
    <SpotifyListSkeleton />
  ) : (
    <List>
      {tracks.map(track => {
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
        const duration = formatDuration(track.duration_ms);

        const subtitle = `${duration} · ${artistName}`;

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
