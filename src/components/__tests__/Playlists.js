import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { PlaylistsProvider } from "../context/playlists";
import { Playlists } from "../Playlists";

it("should render successfully", async () => {
  render(<Playlists />, { wrapper: PlaylistsProvider });

  // A button to add a playlist should be on the screen
  const addPlaylistButton = screen.getByTestId("add-playlist-button");
  expect(addPlaylistButton).toBeInTheDocument();

  // When we click on it, by default it will create a playlist named Playlist 1
  addPlaylistButton.click();

  const newPlaylist = screen.getByText("Playlist 1");
  expect(newPlaylist).toBeInTheDocument();

  // When we click on delete, it should disappear
  const deletePlaylistButton = screen.getByTestId("delete-playlist-button");
  deletePlaylistButton.click();
  expect(newPlaylist).not.toBeInTheDocument();
});
