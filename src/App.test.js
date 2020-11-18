import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { SpotifyAuthProvider } from "./context/spotify-auth";

import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./styles/Theme";

import { MemoryRouter as Router } from "react-router-dom";

import App from "./App";

it("renders login page when unauthenticated", async () => {
  render(
    <ThemeProvider theme={theme}>
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  );

  await waitFor(() =>
    expect(screen.getByTestId("login-button")).toBeInTheDocument()
  );
});

it("checks if navigaiton element", async () => {
  const token = "FAKE_ACCESS_TOKEN";

  render(
    <Router initialEntries={["/"]}>
      <ThemeProvider theme={theme}>
        <SpotifyAuthProvider value={{ token }}>
          <App />
        </SpotifyAuthProvider>
      </ThemeProvider>
    </Router>
  );

  // Test if user is logged in by checking if the <Navigation /> component is
  // in the document. It has a data-testid HTMl attribute equal to 'navigation'.

  // await waitFor(() => {
  //   expect(screen.getByTestId("navigation-top")).toBeInTheDocument()
  // });

  expect(screen.getByTestId("navigation-bottom")).toBeInTheDocument();
  // await waitFor(() => {
  //   expect(screen.getByTestId("navigation-bottom")).toBeInTheDocument();
  // });

  screen.debug();
});
