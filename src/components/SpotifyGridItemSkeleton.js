import React from "react";

import { Grid } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

import { SpotifyCard } from "./SpotifyCard";
import { SpotifyCardMediaSkeleton } from "./SpotifyCardMedia";
import { SpotifyCardTitle } from "./SpotifyCardTitle";
import { SpotifyCardContent } from "./SpotifyCardContent";

export function SpotifyGridItemSkeleton(props) {
  return (
    <Grid item>
      <SpotifyCard>
        <SpotifyCardMediaSkeleton />

        <SpotifyCardContent>
          <SpotifyCardTitle>
            <Skeleton />
          </SpotifyCardTitle>
        </SpotifyCardContent>
      </SpotifyCard>
    </Grid>
  );
}
