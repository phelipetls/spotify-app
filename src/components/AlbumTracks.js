import React from "react";

import axios from "axios";
import { useSpotifyQuery } from "./hooks/spotify-query";

// import { format } from "date-fns";

import { AlbumTracksTable } from "./AlbumTracksTable";

export function AlbumTracks({ id, name }) {
  const { data } = useSpotifyQuery(["Fetch album tracks", { id }], () =>
    axios(`/albums/${id}/tracks`)
  );

  const albumTracks =
    data?.data?.items.map(track => ({
      id: track.id,
      name: track.name,
      duration: track.duration_ms,
      number: track.track_number
    })) || [];

  return <AlbumTracksTable tracks={albumTracks} />;
}
