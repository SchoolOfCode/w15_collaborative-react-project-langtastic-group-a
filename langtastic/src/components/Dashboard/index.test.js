import React from "react";
import { render } from "@testing-library/react";

import "@testing-library/jest-dom";

import Dashboard from ".";

test("Dashboard should render onto the DOM", () => {
  const { getByTestId } = render(<Dashboard />);
  const actual = getByTestId("dashboard");
  expect(actual).toBeInTheDocument();
});
