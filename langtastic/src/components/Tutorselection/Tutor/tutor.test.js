import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import Tutor from '.';

const testProps = {
  tutor: 'Alina',
};

test('tutor card should be visible', () => {
  const { getByTestId } = render(
    <Router>
      <Tutor {...testProps} />
    </Router>
  );
  const actual = getByTestId('tutor');
  expect(actual).toBeVisible();
});
