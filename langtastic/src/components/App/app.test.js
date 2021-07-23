import { render, screen } from "@testing-library/react";
import { Router } from "react-router-dom";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";

import "@testing-library/jest-dom/extend-expect";

import Dashboard from "../Dashboard";
import HomePage from "../HomePage";
import NavBar from "../NavBar";
test("When on the Dashboard page, clicking the Title renders the homepage onto the DOM", () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <NavBar />
      <Dashboard />
      <HomePage />
    </Router>
  );

  expect(screen.getByText("Upcoming Bookings")).toBeInTheDocument();

  const leftClick = { button: 0 };
  userEvent.click(screen.getByTestId("title"), leftClick);
  expect(screen.getByTestId("homepage")).toBeInTheDocument();
});
