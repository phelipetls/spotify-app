import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { MemoryRouter as Router } from "react-router-dom";

import App from "./App";

it("renders login page when unauthenticated", async () => {
  render(<App />, { wrapper: Router });

  await waitFor(() =>
    expect(screen.getByTestId("login-button")).toBeInTheDocument()
  );
});

it("stores token in localStorage when redirected to /auth by spotify", async () => {
  const SPOTIFY_AUTHENTICATION_URL =
    "/auth#access_token=FAKE_ACCESS_TOKEN&state=RANDOM_STRINGS&scope=read-user";

  jest.spyOn(window.localStorage.__proto__, "setItem");

  render(
    <Router initialEntries={[SPOTIFY_AUTHENTICATION_URL, "/"]}>
      <App />
    </Router>
  );

  await waitFor(() =>
    expect(window.localStorage.setItem).toBeCalledWith(
      "spotifyToken",
      "FAKE_ACCESS_TOKEN"
    )
  );

  // Test if user is logged in by checking if the <Navigation /> component is
  // in the document. It has a data-testid HTMl attribute equal to 'navigation'.
  expect(screen.getByTestId("navigation")).toBeInTheDocument();
});
