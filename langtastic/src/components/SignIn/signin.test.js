import React from 'react';
import { render } from '@testing-library/react';

import LogIn from '.';

test('Test to see whether the LogIn function renders correctly on the page', ()=>{
    const { getByTestId } = render(<LogIn />);
    const actual = getByTestId('login-button');
    expect(actual).toBeInTheDocument();
});