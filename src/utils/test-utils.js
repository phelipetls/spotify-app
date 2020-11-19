import { render } from "@testing-library/react";

import { AuthProvider, useAuth } from "../context/auth";
import { PlaylistsProvider } from "../context/playlists";

import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "../styles/Theme";

import { MemoryRouter as Router } from "react-router-dom";

const customRender = (
  component,
  { routerProps, authProviderValue, ...renderOptions } = {}
) => {
  return render(
    <ThemeProvider theme={theme}>
      <Router {...routerProps}>
        <AuthProvider token="TOKEN" {...authProviderValue}>
          <PlaylistsProvider>
            {component}
            <LocationDisplay />
            <TokenDisplay />
          </PlaylistsProvider>
        </AuthProvider>
      </Router>
    </ThemeProvider>,
    renderOptions
  );
};

export * from "@testing-library/react";

export { customRender as render };
