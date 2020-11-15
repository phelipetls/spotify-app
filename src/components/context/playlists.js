import React, { useReducer, useEffect } from "react";
import { getRandomString } from "../../utils/get-random-string";

const PlaylistsContext = React.createContext();

const INITIAL_PLAYLISTS = [];

function getFromLocalStorageIfAvailable(fallback) {
  return (
    JSON.parse(window.localStorage.getItem("spotifyPlaylists")) || fallback
  );
}

function reducer(playlists, action) {
  const { id, tracks, newName } = action.payload || {};

  switch (action.type) {
    case "addPlaylist":
      const newPlaylist = [
        {
          id: getRandomString(4),
          name: `Playlist ${playlists.length + 1}`,
          tracks: []
        }
      ];
      return playlists.concat(newPlaylist);
    case "deletePlaylist":
      return playlists.filter(playlist => playlist.id !== id);
    case "renamePlaylist":
      return playlists.map(playlist => {
        if (playlist.id === id) {
          return { ...playlist, name: newName };
        }
        return playlist;
      });
    case "addTracksToPlaylist":
      return playlists.map(playlist => {
        if (playlist.id === id) {
          return { ...playlist, tracks: playlist.tracks.concat(tracks) };
        }
        return playlist;
      });
  }
}

export function PlaylistsProvider({ children, ...rest }) {
  const [playlists, dispatch] = useReducer(
    reducer,
    INITIAL_PLAYLISTS,
    getFromLocalStorageIfAvailable
  );

  useEffect(() => {
    window.localStorage.setItem("spotifyPlaylists", JSON.stringify(playlists));
  }, [playlists]);

  return (
    <PlaylistsContext.Provider
      value={{
        playlists,
        dispatch
      }}
      {...rest}
    >
      {children}
    </PlaylistsContext.Provider>
  );
}

export const usePlaylists = () => React.useContext(PlaylistsContext);
