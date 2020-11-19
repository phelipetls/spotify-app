import React, { useEffect } from "react";

import { Redirect } from "react-router-dom";

import { useAuth } from "../context/auth";

/**
 * To logout, just remove the token from the context provider.
 */
export function Logout() {
  const { removeToken } = useAuth();

  useEffect(() => {
    removeToken();
  }, [removeToken]);

  return <Redirect to="/login" />;
}

export default Logout;
