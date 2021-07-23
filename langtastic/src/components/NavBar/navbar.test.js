import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

import NavBar from "../NavBar";

test("navbar should render onto the DOM", () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  );
  const actual = getByTestId("navbar");
  expect(actual).toBeInTheDocument();
});
