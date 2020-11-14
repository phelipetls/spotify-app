import axios from "axios";
import { useQuery } from "react-query";
import { useAuth } from "../../context/spotify-auth";

const BASE_URL = "https://api.spotify.com/v1/";

export function useSpotifyQuery(queryKeys, fetcher) {
  const { token, removeToken } = useAuth();

  axios.interceptors.request.use(req => {
    req.baseURL = BASE_URL;
    req.headers["Authorization"] = `Bearer ${token}`;
    return req;
  });

  const response = useQuery(queryKeys, fetcher, {
    retry: false
  });

  if (response.isError && response?.error?.response?.status === 401) {
    removeToken("");
  }

  return response;
}
