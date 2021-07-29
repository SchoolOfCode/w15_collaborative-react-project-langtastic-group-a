import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import "@testing-library/jest-dom";

import Confirmationbox from "./Confirmationbox";

test("Confirmation box should render onto the DOM", () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <Confirmationbox />
    </BrowserRouter>
  );
  const actual = getByTestId("confirmation-box");
  expect(actual).toBeInTheDocument();
});
