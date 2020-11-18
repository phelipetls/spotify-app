import React from "react";

import { CardActions, Grid } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

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

import { AddToPlaylistButton } from "./AddToPlaylistButton";

export function TopTracks() {
  const { isLoading, data = {} } = useSpotifyQuery(
    "Fetch user top tracks",
    () => axios.get("me/top/tracks")
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

  const tracks = data?.data?.items || [];

  return (
    <>
      <SpotifyGridTitle>Top Faixas</SpotifyGridTitle>

      <SpotifyGrid>
        {tracks.map(track => (
          <Grid item key={track.id}>
            <SpotifyCard>
              <SpotifyCardMedia
                alt={track.name}
                src={track.album.images[0].url}
              />

              <SpotifyCardContent>
                <SpotifyCardTitle>{track.name}</SpotifyCardTitle>

                <SpotifyCardSubtitle>
                  {track.artists[0].name}
                </SpotifyCardSubtitle>
              </SpotifyCardContent>

              <CardActions>
                <AddToPlaylistButton tracks={[track.id]} size="small" />
              </CardActions>
            </SpotifyCard>
          </Grid>
        ))}
      </SpotifyGrid>
    </>
  );
}
