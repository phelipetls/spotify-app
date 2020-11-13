import React from "react";

import { useSpotifyQuery } from "./hooks/spotify-query";

import { SpotifyGrid } from "./SpotifyGrid";

export function TopTracks() {
  const { data = {} } = useSpotifyQuery("Fetch user top tracks", {
    endpoint: "me/top/tracks"
  });

  const items = data.items || [];

  const tracks = items.map(track => ({
    title: track.name,
    subtitle: track.artists[0].name,
    id: track.id,
    spotify_url: track.external_urls.spotify,
    image: track.album.images[0]
  }));

  return <SpotifyGrid title="Top Faixas" items={tracks} />;
}
