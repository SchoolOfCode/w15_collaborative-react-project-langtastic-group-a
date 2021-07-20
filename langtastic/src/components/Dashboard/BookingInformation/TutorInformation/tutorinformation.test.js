import React from 'react';
import { render } from '@testing-library/react';

import TutorInformation from '.';

const testProps = {
    tutorInfo: ''
};

test('Test to see whether the TutorInformation function renders correctly on the page', ()=>{
    const { getByTestId } = render(<TutorInformation />);
    const actual = getByTestId('tutorinformation-container');
    expect(actual).toBeInTheDocument();
})