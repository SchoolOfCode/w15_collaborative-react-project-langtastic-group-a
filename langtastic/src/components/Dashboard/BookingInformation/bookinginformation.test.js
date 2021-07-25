import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import BookingInformation from '.';

const testProps = {
  booking: 'test',
};
test('Booking information should render onto the DOM', () => {
  const { getByTestId } = render(<BookingInformation {...testProps} />);
  const actual = getByTestId('tutor-info');
  expect(actual).toBeInTheDocument();
});
