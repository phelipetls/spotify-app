import { useQuery } from "react-query";
import { useAuth } from "../../context/spotify-auth";

const BASE_URL = "https://api.spotify.com/v1/";

const fetchSpotify = async (url, token) => {
  const response = await fetch(url, {
    headers: { Authorization: `Bearer ${token}` }
  });
  const json = await response.json();
  return json;
};

export function useSpotifyQuery(queryKeys, { endpoint }) {
  const url = BASE_URL + endpoint;

  const { token, removeToken } = useAuth();

  const responseInfo = useQuery(queryKeys, () => fetchSpotify(url, token), {
    retry: false
  });

  const error = responseInfo.data && responseInfo.data.error;

  if (
    error &&
    error.status &&
    error.status === 401 &&
    error.message === "The access token expired"
  ) {
    removeToken("");
  }

  return responseInfo;
}
