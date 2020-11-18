import React from "react";

import { Typography } from "@material-ui/core";

import { useParams } from "react-router-dom";
import { usePlaylists } from "../context/playlists";

import { PlaylistTrackList } from "./PlaylistTrackList";

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

  const tracks = currentPlaylist.tracks;

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
        {tracks.length} faixas
      </Typography>

      {tracks.length > 0 && <PlaylistTrackList id={id} tracks={tracks} />}
    </>
  );
}

export default Playlist;
