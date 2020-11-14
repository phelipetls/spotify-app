import { useState } from "react";

import axios from "axios";
import { useSpotifyQuery } from "./spotify-query";
import { useDebounce } from "use-debounce";

const searchFunction = (query, searchType) => {
  if (query) {
    const searchParams = new URLSearchParams();

    searchParams.set("q", query);
    searchParams.set("type", searchType);

    return axios("/search?" + searchParams);
  }
};

export function useSpotifySearch() {
  // See
  // https://dev.to/gabe_ragland/debouncing-with-react-hooks-jci
  // for details about this implementation
  const [query, setQuery] = useState("arca");
  const [searchType, setSearchType] = useState("artist");

  // Use debounced input to search in Spotify
  const [debouncedQuery] = useDebounce(query, 1000);

  // react-query will not make anothe call if the value hasn't chaned
  const response = useSpotifyQuery(
    ["Search in spotify", { debouncedQuery, searchType }],
    () => searchFunction(debouncedQuery, searchType)
  );

  return [query, setQuery, searchType, setSearchType, response];
}
