import React from "react";

import { List } from "@material-ui/core";

import axios from "axios";
import { useSpotifyQuery } from "./hooks/spotify-query";

import { SpotifyListItem } from "./SpotifyListItem";

import { formatMilliseconds } from "./utils/formatMilliseconds";

const placeholderTracklist = Array.from({ length: 10 }).map((_, index) => ({
  id: index
}));

export function PlaylistTrackList({ id, tracks }) {
  // Get only 50 first tracks, as it is the API limit
  const searchParams = new URLSearchParams([
    ["ids", tracks.slice(0, 50).join(",")]
  ]);

  const { isLoading, data = {} } = useSpotifyQuery(
    ["Get tracks in playlist", id],
    () => axios.get("/tracks?" + searchParams)
  );

  const trackList = isLoading
    ? placeholderTracklist
    : data?.data?.tracks.map(track => ({
        id: track.id,
        title: track.name,
        image: track.album.images[0],
        spotify_url: track.external_urls.spotify,
        subtitle: formatMilliseconds(track.duration_ms),
        type: "track"
      }));

  return (
    <List>
      {trackList.map(result => (
        <SpotifyListItem key={result.id} isLoading={isLoading} item={result} />
      ))}
    </List>
  );
}
