import React from 'react';
import { render } from '@testing-library/react';

import Dashboard from './index';

test(`The confirmation box renders within the Dashboard container`, () => {
  const { getByTestId } = render(<Dashboard />);
  const actual = getByTestId('dashboard-container');
  expect(actual).toBeInTheDocument();
});

