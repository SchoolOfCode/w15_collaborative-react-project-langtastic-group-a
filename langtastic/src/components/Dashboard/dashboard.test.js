import React from 'react';
import { render } from '@testing-library/react';

import Dashboard from '.';

test('Test to see whether the dashboard function renders correctly on the page', ()=>{
    const { getByTestId } = render(<Dashboard />);
    const actual = getByTestId('dashboard-container');
    expect(actual).toBeInTheDocument();
})