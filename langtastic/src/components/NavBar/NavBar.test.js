import React from 'react';
import { render } from '@testing-library/react';

import NavBar from '.';

test('Test to see whether the NavBar function renders correctly on the page', ()=>{
    const { getByTestId } = render(<NavBar />);
    const actual = getByTestId('navbar-container');
    expect(actual).toBeInTheDocument();
});