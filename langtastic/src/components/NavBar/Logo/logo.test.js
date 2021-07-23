import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

import Logo from ".";

test("Logo should render onto the DOM", () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <Logo />
    </BrowserRouter>
  );
  const actual = getByTestId("logo");
  expect(actual).toBeInTheDocument();
});

const testProps = {
  logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
};
test("Given props of an image src, title should render with the correct logo image", () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <Logo {...testProps} />
    </BrowserRouter>
  );
  const actual = getByTestId("logo");
  expect(actual).toHaveAttribute("src", "logo.svg");
});
