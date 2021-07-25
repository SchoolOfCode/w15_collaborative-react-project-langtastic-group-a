import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import ConfirmationBox from './Confirmationbox';

test(`The confirmation box renders within the ConfirmationBox  container`, () => {
  //Arrange
  const { getByTestId } = render(<ConfirmationBox />);
  //Act
  const actual = getByTestId('confirmationbox-container');
  //Assert
  expect(actual).toBeInTheDocument();
});
