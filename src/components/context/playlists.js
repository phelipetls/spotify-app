import React, { useState, useEffect } from "react";
import { getRandomString } from "../../utils/get-random-string";

const PlaylistsContext = React.createContext();

export function PlaylistsProvider({ children, ...rest }) {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    localStorage.setItem("spotifyPlaylists", JSON.stringify(playlists));
  }, [playlists]);

  const addPlaylist = () =>
    setPlaylists(playlists => [
      ...playlists,
      {
        id: getRandomString(4),
        name: `Playlist ${playlists.length + 1}`,
        tracks: []
      }
    ]);

  const removePlaylist = id =>
    setPlaylists(playlists => playlists.filter(playlist => playlist.id !== id));

  return (
    <PlaylistsContext.Provider
      value={{
        playlists,
        addPlaylist,
        removePlaylist
      }}
      {...rest}
    >
      {children}
    </PlaylistsContext.Provider>
  );
}

export const usePlaylists = () => React.useContext(PlaylistsContext);
