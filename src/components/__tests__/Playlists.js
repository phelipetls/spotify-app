import React from "react";

import { Playlists } from "../Playlists";

import { render, screen } from "test-utils";
import "@testing-library/jest-dom/extend-expect";

test("if adding and removing playlists work", () => {
  render(<Playlists />);

  screen.getByTestId("add-playlist-button").click();

  const newPlaylist = screen.getByText("Playlist 1");
  expect(newPlaylist).toBeInTheDocument();

  screen.getByTestId("delete-playlist-button").click();
  expect(newPlaylist).not.toBeInTheDocument();
});
