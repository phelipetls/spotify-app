import { render, screen, waitFor } from "test-utils";
import "@testing-library/jest-dom/extend-expect";

import App from "./App";

it("should render home page if the user is authenticated", async () => {
  // A token is provided by default
  render(<App />);

  await waitFor(() =>
    expect(screen.getByRole("link", { name: /logout/i })).toBeInTheDocument()
  );
});

it("should render login button when unauthenticated", async () => {
  // Remove token to simulate a user being unauthenticated
  render(<App />, { authProviderValue: { token: "" } });

  await waitFor(() =>
    expect(screen.getByRole("link", { name: /login/i })).toBeInTheDocument()
  );
});

const mockedSetToken = jest.fn();

it("should log in after hitting a URL containing an access token", async () => {
  // Simulate hitting the callback URL we pass to Spotify.
  // It should extract the access token from the URL and use it until it expires.
  render(<App />, {
    authProviderValue: { token: "", setToken: mockedSetToken },
    routerProps: { initialEntries: ["/auth#access_token=CALLBACK_TOKEN"] }
  });

  await waitFor(() =>
    expect(mockedSetToken).toHaveBeenCalledWith("CALLBACK_TOKEN")
  );

  // No way to test this without testing the implementation detail of calling
  // setToken??

  // The token is never updated in time it hits <PrivateRoute /> in order for
  // it to be render the <HomePage /> component. Instead the token is still
  // empty and we get the <LoginPage />

  // This does not work, but it would be preferred:
  // await waitFor(() =>
  //   expect(screen.getByRole("link", { name: /logout/i })).toBeInTheDocument()
  // );
});
