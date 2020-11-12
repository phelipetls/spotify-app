import React from "react";

import { CircularProgress } from "@material-ui/core";
import { useSpotifyQuery } from "./hooks/spotify-query";

export function HomePage() {
  const { isLoading, data } = useSpotifyQuery("Fetch user data", {
    endpoint: "me"
  });

  if (isLoading) {
    return <CircularProgress />;
  }

  // const { display_name: name, images } = data;

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
