import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { createMemoryHistory } from "history";
import { MemoryRouter as Router } from "react-router-dom";

import App from "./App";

it("renders login page when unauthenticated", () => {
  const { queryByTestId } = render(<App />, { wrapper: Router });

  const loginButton = screen.queryByTestId("login-button");
  expect(loginButton).toBeInTheDocument();
});

it("stores token in localStorage when redirected to /auth by spotify", async () => {
  const SPOTIFY_AUTHENTICATION_URL =
    "/auth#access_token=FAKE_ACCESS_TOKEN&state=RANDOM_STRINGS&scope=read-user";

  jest.spyOn(window.localStorage.__proto__, "setItem");

  render(
    <Router initialEntries={[SPOTIFY_AUTHENTICATION_URL]}>
      <App />
    </Router>
  );

  expect(window.localStorage.setItem).toBeCalledWith(
    "spotifyToken",
    "FAKE_ACCESS_TOKEN"
  );

  // Test if user is logged in by checking if the <Navigation /> component is
  // in the document. It has a data-testid HTMl attribute equal to 'navigation'.
  await waitFor(() =>
    expect(screen.queryByTestId("navigation")).toBeInTheDocument()
  );
});
