import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import HomePage from "../HomePage";

test("homepage should render onto the DOM", () => {
  const { getByTestId } = render(<HomePage />);
  const actual = getByTestId("homepage");
  expect(actual).toBeInTheDocument();
});
