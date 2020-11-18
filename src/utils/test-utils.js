import { render } from "@testing-library/react";

import { SpotifyAuthProvider } from "../context/spotify-auth";
import { PlaylistsProvider } from "../context/playlists";

import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "../styles/Theme";

import { MemoryRouter as Router } from "react-router-dom";

const customRender = (
  component,
  { routerProps, authProps, ...renderOptions } = {}
) => {
  return render(
    <ThemeProvider theme={theme}>
      <Router {...routerProps}>
        <SpotifyAuthProvider
          value={{
            token: "MY_ACCESS_TOKEN"
          }}
          {...authProps}
        >
          <PlaylistsProvider>{component}</PlaylistsProvider>
        </SpotifyAuthProvider>
      </Router>
    </ThemeProvider>,
    renderOptions
  );
};

export * from "@testing-library/react";

export { customRender as render };
