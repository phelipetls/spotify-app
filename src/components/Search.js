// Spotify documentation at
// https://developer.spotify.com/documentation/web-api/reference/search/search/
import React, { useState } from "react";

import { Grid } from "@material-ui/core";

import { useSpotifySearch } from "./hooks/spotify-search";

import { SearchTabs } from "./SearchTabs";
import { SearchInput } from "./SearchInput";
import { SearchResults } from "./SearchResults";
import { NoSearchResults } from "./NoSearchResults";

const pluralize = word => word + "s";

/**
 * Component responsible for searching albums, artists or tracks.
 *
 * Which one will be searched depends on the searchType variable (which is
 * stateful and controlled by the `SearchTabs` component).
 *
 * The search will only take place after 500ms because we debounce the query
 * value inside useSpotifySearch.
 *
 * The component SearchResults shows the search results in a list format.
 */
export function Search() {
  const [query, setQuery] = useState("");
  const [searchType, setSearchType] = useState("artist");

  const [debouncedQuery, { data, isLoading }] = useSpotifySearch(
    query,
    searchType
  );

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
      ) : !isLoading && debouncedQuery !== "" && searchResults.length === 0 ? (
        <NoSearchResults title="Nenhum resultado encontrado" />
      ) : (
        <SearchResults results={searchResults} isLoading={isLoading} />
      )}
    </Grid>
  );
}

export default Search;
