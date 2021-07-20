import React from 'react';
import { render } from '@testing-library/react';

import SignUp from '.';

test('Test to see whether the SignUp function renders correctly on the page', ()=>{
    const { getByTestId } = render(<SignUp />);
    const actual = getByTestId('signup-button');
    expect(actual).toBeInTheDocument();
});