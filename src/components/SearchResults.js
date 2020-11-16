import React from "react";

import {
  Avatar,
  Link,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  ListItemSecondaryAction
} from "@material-ui/core";

import { SpotifyListSkeleton } from "./SpotifyListSkeleton";
import { AddToPlaylistButton } from "./AddToPlaylistButton";

function getImageUrl(item) {
  const images = item.type === "track" ? item.album.images : item.images;
  return images?.[0]?.url || "";
}

export function SearchResults(props) {
  const { results, isLoading } = props;

  if (isLoading) {
    return <SpotifyListSkeleton />;
  }

  return (
    <List>
      {results.map(result => {
        const title = (
          <Link
            color="inherit"
            underline="none"
            href={
              result.type === "track"
                ? result.external_urls.spotify
                : `/${result.type}/${result.id}`
            }
          >
            {result.name}
          </Link>
        );

        const subtitle = result.type !== "artist" && result.artists[0].name;

        return (
          <ListItem key={result.id}>
            <ListItemAvatar>
              <Avatar alt={result.name} src={getImageUrl(result)} />
            </ListItemAvatar>

            <ListItemText secondary={subtitle}>{title}</ListItemText>

            {result.type === "track" && (
              <ListItemSecondaryAction>
                <AddToPlaylistButton tracks={[result.id]} />
              </ListItemSecondaryAction>
            )}
          </ListItem>
        );
      })}
    </List>
  );
}
