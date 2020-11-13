import React from "react";

import { useSpotifyQuery } from "./hooks/spotify-query";

import { SpotifyGrid } from "./SpotifyGrid";

export function TopArtists() {
  const { data = {} } = useSpotifyQuery("Fetch user top artists", {
    endpoint: "me/top/artists"
  });

  const items = data.items || [];

  const artists = items.map(artist => ({
    title: artist.name,
    id: artist.id,
    spotify_url: artist.external_urls.spotify,
    image: artist.images[0]
  }));

  return <SpotifyGrid title="Top Artistas" items={artists} />;
}
