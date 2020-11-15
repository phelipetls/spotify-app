import React, { useEffect } from "react";

import { Redirect } from "react-router-dom";

import { useLocation } from "react-router-dom";
import { useAuth } from "../context/spotify-auth";
import { getToken } from "../utils/get-token";

export function AuthPage() {
  const auth = useAuth();

  const url = useLocation();
  const token = getToken(url);

  useEffect(() => {
    if (token) {
      auth.changeToken(token);
    }
  }, [auth, token]);

  return <Redirect to="/" />;
}

export default AuthPage;
