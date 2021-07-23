import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import DateAndTime from "../DateAndTime";

test("Booking information should render onto the DOM", () => {
  const { getByTestId } = render(<DateAndTime />);
  const actual = getByTestId("date-time");
  expect(actual).toBeInTheDocument();
});
