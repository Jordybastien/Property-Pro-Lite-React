import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from '../App';

it('Renders without crushing', () => {
    const div = document.createElement('app');
    ReactDOM.render(<MemoryRouter><App /></MemoryRouter>, div)
})