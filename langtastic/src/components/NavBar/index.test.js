import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";

import NavBar from ".";

test("navbar should render onto the DOM", () => {
  const { getByTestId } = render(
    <Router>
      <NavBar />
    </Router>
  );
  const actual = getByTestId("navbar");
  expect(actual).toBeInTheDocument();
});
