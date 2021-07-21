import React from 'react';
import { render } from '@testing-library/react';

import ConfirmationBox from './Confirmationbox';

test(`The confirmation box renders within the Appointmentconfirmation container`, () => {
  //Arrange
  const { getByTestId } = render(<ConfirmationBox />);
  //Act
  const actual = getByTestId('confirmationbox-container');
  //Assert
  expect(actual).toBeInTheDocument();
});
