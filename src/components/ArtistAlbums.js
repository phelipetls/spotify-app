import React from "react";

import axios from "axios";
import { useSpotifyQuery } from "./hooks/spotify-query";

import { SpotifyGrid } from "./SpotifyGrid";

export function ArtistAlbums({ id }) {
  const { isLoading, data = {} } = useSpotifyQuery(
    ["Fetch artist's top albums", { id }],
    () => axios(`/artists/${id}/albums?include_groups=album`)
  );

  const albums =
    data?.data?.items.map(item => ({
      id: item.id,
      image: item.images[0],
      title: item.name,
      // prettier-ignore
      subtitle: `${item.total_tracks} Faixas · ${item.release_date.slice(0, 4)}`,
      type: "album"
    })) || [];

  return <SpotifyGrid title="Álbuns" items={albums} isLoading={isLoading} />;
}
