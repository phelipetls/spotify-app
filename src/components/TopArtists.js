import React from "react";

import { Grid } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import { Link as RouterLink } from "react-router-dom";

import axios from "axios";
import { useSpotifyQuery } from "./hooks/spotify-query";

import { SpotifyGrid } from "./SpotifyGrid";
import { SpotifyGridTitle } from "./SpotifyGridTitle";
import { SpotifyGridSkeleton } from "./SpotifyGridSkeleton";

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

        <SpotifyGridSkeleton />
      </>
    );

  const artists = data?.data?.items || [];

  return (
    <>
      <SpotifyGridTitle>Top Artistas</SpotifyGridTitle>

      <SpotifyGrid>
        {artists.map(artist => (
          <Grid
            item
            key={artist.id}
            component={RouterLink}
            to={`/artist/${artist.id}`}
          >
            <SpotifyCard>
              <SpotifyCardMedia alt={artist.name} src={artist.images[0].url} />

              <SpotifyCardContent>
                <SpotifyCardTitle>{artist.name}</SpotifyCardTitle>
              </SpotifyCardContent>
            </SpotifyCard>
          </Grid>
        ))}
      </SpotifyGrid>
    </>
  );
}
