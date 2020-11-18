import React from "react";

import { Grid } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

import { SpotifyGrid } from "./SpotifyGrid";
import { SpotifyCard } from "./SpotifyCard";
import { SpotifyCardMediaSkeleton } from "./SpotifyCardMedia";
import { SpotifyCardTitle } from "./SpotifyCardTitle";
import { SpotifyCardContent } from "./SpotifyCardContent";

export function SpotifyGridSkeleton({ length = 3 }) {
  return (
    <SpotifyGrid>
      {Array.from({ length }).map((_, index) => (
        <Grid item key={index}>
          <SpotifyCard>
            <SpotifyCardMediaSkeleton />

            <SpotifyCardContent>
              <SpotifyCardTitle>
                <Skeleton />
              </SpotifyCardTitle>
            </SpotifyCardContent>
          </SpotifyCard>
        </Grid>
      ))}
    </SpotifyGrid>
  );
}
