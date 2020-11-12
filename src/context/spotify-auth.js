import React, { useState, useEffect } from "react";

const AuthContext = React.createContext();

export function SpotifyAuthProvider({ children, ...rest }) {
  const [token, setToken] = useState(
    () => window.localStorage.getItem("spotifyToken") || ""
  );

  useEffect(() => {
    if (token) {
      window.localStorage.setItem("spotifyToken", token);
    }
  }, [token]);

  const changeToken = token => setToken(token);

  return (
    <AuthContext.Provider value={{ token, changeToken }} {...rest}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => React.useContext(AuthContext);
