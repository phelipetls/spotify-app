import React from "react";

import { List } from "@material-ui/core";

import { NoSearchResults } from "./NoSearchResults";
import { SearchResultListItem } from "./SearchResultListItem";

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
        subtitle: searchType !== "artist" ? item.artists[0].name : ""
      }));

  return (
    <List>
      {searchResults.map(result => (
        <SearchResultListItem
          key={result.id}
          isLoading={isLoading}
          item={result}
        />
      ))}
    </List>
  );
}
