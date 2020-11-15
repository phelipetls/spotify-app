import React, { useEffect } from "react";

import { Redirect } from "react-router-dom";

import { useAuth } from "../context/spotify-auth";

export function Logout() {
  const { removeToken } = useAuth();

  useEffect(() => {
    removeToken();
  }, [removeToken]);

  return <Redirect to="/login" />;
}

export default Logout;
