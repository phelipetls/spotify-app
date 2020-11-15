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

// See
// https://dev.to/gabe_ragland/debouncing-with-react-hooks-jci
// for details about this implementation
export function useSpotifySearch(query, searchType) {
  // Use debounced input to search in Spotify
  const [debouncedQuery] = useDebounce(query, 500);

  // react-query will not make another call if the value hasn't changed
  const response = useSpotifyQuery(
    ["Search in spotify", { debouncedQuery, searchType }],
    () => searchFunction(debouncedQuery, searchType)
  );

  return response;
}
