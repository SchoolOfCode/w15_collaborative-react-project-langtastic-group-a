import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import "@testing-library/jest-dom";

import Title from ".";

test("Title should render onto the DOM", () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <Title />
    </BrowserRouter>
  );
  const actual = getByTestId("title");
  expect(actual).toBeInTheDocument();
});

const testProps = {
  title: "Test Title",
};
test("Given props of text, title should render with the correct text", () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <Title {...testProps} />
    </BrowserRouter>
  );
  const actual = getByTestId("title");
  expect(actual).toHaveTextContent("Test Title");
});
