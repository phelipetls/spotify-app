import React from "react";

import { Grid } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import { Link as RouterLink } from "react-router-dom";

import axios from "axios";
import { useSpotifyQuery } from "./hooks/spotify-query";

import { SpotifyGrid } from "./SpotifyGrid";
import { SpotifyGridTitle } from "./SpotifyGridTitle";
import { SpotifyGridItemSkeleton } from "./SpotifyGridItemSkeleton";

import { SpotifyCard } from "./SpotifyCard";
import { SpotifyCardMedia } from "./SpotifyCardMedia";
import { SpotifyCardTitle } from "./SpotifyCardTitle";
import { SpotifyCardContent } from "./SpotifyCardContent";

export function TopArtists() {
  const { isLoading, data = {} } = useSpotifyQuery(
    "Fetch user top artists",
    () => axios.get("me/top/artists")
  );

  if (isLoading)
    return (
      <>
        <SpotifyGridTitle>
          <Skeleton />
        </SpotifyGridTitle>

        <SpotifyGrid>
          {[1, 2, 3].map(id => (
            <SpotifyGridItemSkeleton key={id} />
          ))}
        </SpotifyGrid>
      </>
    );

  const artists = data?.data?.items || [];

  return (
    <>
      <SpotifyGridTitle>Top Artistas</SpotifyGridTitle>

      <SpotifyGrid items={artists}>
        {artists.map(artist => (
          <RouterLink to={`/artist/${artist.id}`}>
            <Grid item key={artist.id}>
              <SpotifyCard>
                <SpotifyCardMedia
                  alt={artist.name}
                  src={artist.images[0].url}
                />

                <SpotifyCardContent>
                  <SpotifyCardTitle>{artist.name}</SpotifyCardTitle>
                </SpotifyCardContent>
              </SpotifyCard>
            </Grid>
          </RouterLink>
        ))}
      </SpotifyGrid>
    </>
  );
}
