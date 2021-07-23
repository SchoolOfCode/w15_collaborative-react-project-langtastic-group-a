import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";

import TutorCard from ".";

const testProps = {
  tutorInfo: "Natalie",
};

test("tutor card should be visible", () => {
  const { getByTestId } = render(
    <Router>
      <TutorCard {...testProps} />
    </Router>
  );
  const actual = getByTestId("tutor-card");
  expect(actual).toBeVisible();
});
