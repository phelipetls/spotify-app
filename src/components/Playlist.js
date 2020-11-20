import React from "react";

import { Typography } from "@material-ui/core";

import axios from "axios";
import { useSpotifyQuery } from "./hooks/spotify-query";

import { useParams } from "react-router-dom";
import { usePlaylists } from "../context/playlists";

import { PlaylistTrackList } from "./PlaylistTrackList";

import { formatDuration } from "./utils/formatDuration";

/**
 * A page to show the tracks within a playlist.
 *
 * It get the `tracks` array inside an object within the playlist context (an
 * array of objects), make a request for their maetadata and then show them.
 *
 */
export function Playlist() {
  const { id } = useParams();
  const { playlists } = usePlaylists();

  const currentPlaylist = playlists.find(playlist => playlist.id === id);

  const { isLoading, data = {} } = useSpotifyQuery(
    ["Get tracks in playlist", id],
    () => {
      // Get only 50 first tracks, as it is the API limit
      const searchParams = new URLSearchParams([
        ["ids", currentPlaylist.tracks.slice(0, 50).join(",")]
      ]);

      return axios.get("/tracks?" + searchParams);
    }
  );

  const tracks = data?.data?.tracks || [];

  const totalDuration = tracks.reduce(
    (total, track) => total + track.duration_ms,
    0
  );

  return (
    <>
      <Typography
        variant="h5"
        component="h2"
        color="primary"
        align="center"
        gutterBottom
      >
        {currentPlaylist.name}
      </Typography>

      <Typography variant="body1" align="center">
        {tracks.length} faixas · {formatDuration(totalDuration)}
      </Typography>

      <PlaylistTrackList id={id} tracks={tracks} isLoading={isLoading} />
    </>
  );
}

export default Playlist;
