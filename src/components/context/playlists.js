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

  const addTrackToPlaylist = (id, track) => {
    const targetPlaylist = playlists.find(playlist => playlist.id === id);
    targetPlaylist.tracks.push(track);
  };

  return (
    <PlaylistsContext.Provider
      value={{
        playlists,
        addPlaylist,
        removePlaylist,
        addTrackToPlaylist
      }}
      {...rest}
    >
      {children}
    </PlaylistsContext.Provider>
  );
}

export const usePlaylists = () => React.useContext(PlaylistsContext);
