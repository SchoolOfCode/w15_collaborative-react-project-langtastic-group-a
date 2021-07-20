import React from 'react';
import { render } from '@testing-library/react';

import DateAndTime from '.';

test('Test to see whether the DateAndTime function renders correctly on the page', ()=>{
    const { getByTestId } = render(<DateAndTime />);
    const actual = getByTestId('dateandtime-container');
    expect(actual).toBeInTheDocument();
})