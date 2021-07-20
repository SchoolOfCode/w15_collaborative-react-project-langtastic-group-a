import React from 'react';
import { render } from '@testing-library/react';

import ConfirmationBox from '.';

const testProps = {
    props: ''
};

test('Test to see whether the ConfirmationBox renders correctly on the page', ()=>{
    //Arrange
    const { getByTestId } = render(<ConfirmationBox />);
    //Act
    const actual = getByTestId('confirmatiobox-container');
    //Assert
    expect(actual).toBeInTheDocument();
})