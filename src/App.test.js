import { render, screen, waitFor } from "./test-utils";
import "@testing-library/jest-dom/extend-expect";

import App from "./App";

it("renders login page when unauthenticated", () => {
  render(<App />);

  waitFor(() => expect(screen.getByTestId("login-button")).toBeInTheDocument());
});

it("checks if navigaiton element", async () => {
  render(<App />);

  // Test if user is logged in by checking if the <Navigation /> component is
  // in the document. It has a data-testid HTMl attribute equal to 'navigation'.
  expect(screen.getByTestId("navigation-top")).toBeInTheDocument();
  expect(screen.getByTestId("navigation-bottom")).toBeInTheDocument();
});
