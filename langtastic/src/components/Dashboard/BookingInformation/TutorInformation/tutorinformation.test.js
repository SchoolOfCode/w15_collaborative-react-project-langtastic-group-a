import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import TutorInformation from '../TutorInformation';

const testProps = {
  tutorInfo: 'test',
};
test('Tutor info should render onto the DOM', () => {
  const { getByTestId } = render(<TutorInformation {...testProps} />);
  const actual = getByTestId('tutor-info');
  expect(actual).toBeInTheDocument();
});
