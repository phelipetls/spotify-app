import React from "react";

import { List, ListItemSecondaryAction } from "@material-ui/core";

import { SpotifyListItem } from "./SpotifyListItem";
import { AddToPlaylistButton } from "./AddToPlaylistButton";

const placeholderSearchResults = Array.from({ length: 10 }).map((_, index) => ({
  id: index
}));

export function SearchResults(props) {
  const { items, isLoading, searchType } = props;

  const searchResults = isLoading
    ? placeholderSearchResults
    : items.map(item => ({
        title: item.name,
        image: searchType === "track" ? item.album.images[0] : item.images[0],
        id: item.id,
        spotify_url: item.external_urls.spotify,
        subtitle: searchType !== "artist" ? item.artists[0].name : "",
        type: item.type
      }));

  return (
    <List>
      {searchResults.map(result => (
        <SpotifyListItem key={result.id} isLoading={isLoading} item={result}>
          {/* Pass add to playlist button as secondary action to list item */}
          {result.type === "track" && (
            <ListItemSecondaryAction>
              <AddToPlaylistButton tracks={[result.id]} />
            </ListItemSecondaryAction>
          )}
        </SpotifyListItem>
      ))}
    </List>
  );
}
