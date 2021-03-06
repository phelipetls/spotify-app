// Relevant documentation:
// https://developer.spotify.com/documentation/general/guides/authorization-guide/#implicit-grant-flow

import { getRandomString } from "./get-random-string";

const BASE_URL = "https://accounts.spotify.com";
const AUTH_ENDPOINT = "authorize";
const CLIENT_ID = "35d25e5a01eb4c87a4458be1b0786bb8";
const RESPONSE_TYPE = "token";
const REDIRECT_URI =
  process.env.NODE_ENV === "production"
    ? "https://my-playlists.netlify.app/auth"
    : "http://localhost:3000/auth";
const SCOPE = ["user-read-private", "user-top-read", "user-library-read"];

export function getAuthUrl() {
  const queryString = new URLSearchParams();

  queryString.set("client_id", CLIENT_ID);
  queryString.set("response_type", RESPONSE_TYPE);
  queryString.set("response_type", RESPONSE_TYPE);
  queryString.set("redirect_uri", new URL(REDIRECT_URI));
  queryString.set("scope", SCOPE);
  queryString.set("state", getRandomString(16));

  return new URL(AUTH_ENDPOINT + "?" + queryString, BASE_URL);
}
