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
import { SpotifyCardSubtitle } from "./SpotifyCardSubtitle";
import { SpotifyCardContent } from "./SpotifyCardContent";

export function ArtistAlbums({ id }) {
  const { isLoading, data = {} } = useSpotifyQuery(
    ["Fetch artist's top albums", { id }],
    () => axios(`/artists/${id}/albums?include_groups=album`)
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

  const albums = data?.data?.items || [];

  return (
    <>
      <SpotifyGridTitle>Álbuns</SpotifyGridTitle>

      <SpotifyGrid items={albums}>
        {albums.map(album => {
          const releaseYear = album.release_date.slice(0, 4);
          const totalTracks = album.total_tracks;
          const subtitle = `${totalTracks} Faixas · ${releaseYear}`;

          return (
            <Grid
              item
              key={album.id}
              component={RouterLink}
              to={`/album/${album.id}`}
            >
              <SpotifyCard>
                <SpotifyCardMedia alt={album.name} src={album.images[0].url} />

                <SpotifyCardContent>
                  <SpotifyCardTitle>{album.name}</SpotifyCardTitle>
                  <SpotifyCardSubtitle>{subtitle}</SpotifyCardSubtitle>

                  <SpotifyCardSubtitle>
                    {album.artists[0].name}
                  </SpotifyCardSubtitle>
                </SpotifyCardContent>
              </SpotifyCard>
            </Grid>
          );
        })}
      </SpotifyGrid>
    </>
  );
}
