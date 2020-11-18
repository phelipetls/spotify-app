import { render, screen, waitFor } from "../../test-utils";
import "@testing-library/jest-dom/extend-expect";

import App from "../../App";

it("should remove token from localStorage when logout button is clicked", async () => {
  render(<App />);

  jest.spyOn(window.localStorage.__proto__, "removeItem");

  waitFor(() => screen.getByTestId("logout").click());

  waitFor(() => expect(window.localStorage.removeItem).toHaveBeenCalled());
});
