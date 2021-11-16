import React from 'react';
import Footer from '../Footer';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

const mockFn = jest.fn();

describe('Footer component', () => {
    it('Render component', () => {
        render(
            <BrowserRouter>
                <Footer />
            </BrowserRouter>
        )
        const footer = screen.getByRole('footer');
        const buttonSeachFooter = screen.getByRole('buttonSeachFooter');
        buttonSeachFooter.click(mockFn());
        expect(footer).toBeDefined();
        expect(mockFn).toHaveBeenCalled();
    })
})
