// Spotify documentation at
// https://developer.spotify.com/documentation/web-api/reference/search/search/
import React from "react";

import { Grid } from "@material-ui/core";

import { useSpotifySearch } from "./hooks/spotify-search";

import { SearchTabs } from "./SearchTabs";
import { SearchInput } from "./SearchInput";
import { SearchResults } from "./SearchResults";
import { NoSearchResults } from "./NoSearchResults";

const pluralize = word => word + "s";

export function Search() {
  const [
    query,
    setQuery,
    searchType,
    setSearchType,
    { data, isLoading }
  ] = useSpotifySearch();

  // If we're searching for 'artist', we wanna get the array in 'artists.items'
  // Similarly for album and track ┄ pluralize it.
  const searchResults = data?.data?.[pluralize(searchType)]?.items || [];

  const handleChangeSearchType = (_, newSearchType) => {
    setSearchType(newSearchType);
  };

  const handleChangeQuery = e => {
    setQuery(e.target.value);
  };

  return (
    <Grid container direction="column" wrap="nowrap" style={{ height: "100%" }}>
      <SearchTabs tab={searchType} handleChange={handleChangeSearchType} />
      <SearchInput query={query} handleChange={handleChangeQuery} />

      {query === "" ? (
        <NoSearchResults title="Digite alguma coisa primeiro..." />
      ) : !isLoading && query !== "" && searchResults.length === 0 ? (
        <NoSearchResults title="Nenhum resultado encontrado" />
      ) : (
        <SearchResults
          items={searchResults}
          isLoading={isLoading}
          searchType={searchType}
        />
      )}
    </Grid>
  );
}
