import { render } from "@testing-library/react";

import { AuthProvider, useAuth } from "../context/auth";
import { PlaylistsProvider } from "../context/playlists";

import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "../styles/Theme";

import { MemoryRouter as Router, useLocation } from "react-router-dom";

const LocationDisplay = () => {
  const location = useLocation();

  return <div data-testid="location-display">{location.pathname}</div>;
};

const TokenDisplay = () => {
  const { token } = useAuth();

  return <div data-testid="token-display">{token}</div>;
};

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
