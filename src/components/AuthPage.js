import React, { useEffect } from "react";

import { Redirect } from "react-router-dom";

import { useLocation } from "react-router-dom";
import { useAuth } from "../context/spotify-auth";
import { getToken } from "../utils/get-token";

/**
 * Component to parse the URL which Spotify redirects the user to after it
 * grants access to our application.
 *
 * The `getToken` function will extract the access token. If it succeds, the
 * auth context will be updated with it.
 *
 * The user is then redirected to the home page.
 */
export function AuthPage() {
  const { changeToken } = useAuth();

  const url = useLocation();
  const token = getToken(url);

  useEffect(() => {
    if (token) {
      changeToken(token);
    }
  }, [changeToken, token]);

  return <Redirect to="/" />;
}

export default AuthPage;
