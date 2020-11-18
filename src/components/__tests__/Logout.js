import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "../../styles/Theme";

import { MemoryRouter as Router } from "react-router-dom";

import { AuthContext } from "../../context/spotify-auth";

import App from "../../App";

// Wrap around a context provider with a token already set, as if
// the user was authenticated.
const wrapper = ({ children }) => (
  <AuthContext.Provider
    value={{
      token: "FAKE_TOKEN"
    }}
  >
    <ThemeProvider theme={theme}>
      <Router initialEntries={["/logout"]}>{children}</Router>
    </ThemeProvider>
  </AuthContext.Provider>
);

it("should remove token from localStorage when logout button is clicked", async () => {
  render(<App />, { wrapper });

  jest.spyOn(window.localStorage.__proto__, "removeItem");

  waitFor(() => screen.getByTestId("logout").click());

  waitFor(() => expect(window.localStorage.removeItem).toHaveBeenCalled());
});
