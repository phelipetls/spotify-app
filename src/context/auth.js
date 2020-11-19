import React, { useEffect, useState } from "react";

const SPOTIFY_TOKEN_KEY = "spotifyKey";

export const AuthContext = React.createContext();

export function AuthProvider({ children, ...rest }) {
  const [token, setToken] = useState(() => {
    return window.localStorage.getItem(SPOTIFY_TOKEN_KEY) || "";
  });

  useEffect(() => {
    if (token) {
      window.localStorage.setItem(SPOTIFY_TOKEN_KEY, token);
    } else {
      window.localStorage.removeItem(SPOTIFY_TOKEN_KEY);
    }
  }, [token]);

  return (
    <AuthContext.Provider value={{ token, setToken, ...rest }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => React.useContext(AuthContext);
