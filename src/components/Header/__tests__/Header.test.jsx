import React from 'react';
import Header from '../Header';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import * as Redux from 'react-redux';
import store from '../../../redux/store';

const { Provider } = Redux;

describe('Header compnent', () => {
    it('Render component and produts are filtered', () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <Header />
                </Provider>
            </BrowserRouter>
        )
        const mockProducts = [{ name: 'test' }, { name: 'phone' }, { name: 'cloud' }, { name: 'test' }];
        const buttonSeachHeader = screen.getByRole('buttonSeachHeader');
        const seachHeader = screen.getByRole('seachHeader');
        seachHeader.value = 'test';
        const filteredProducts = mockProducts.filter(product =>
            product.name.toLowerCase().includes(seachHeader.value.toLowerCase())
        )
        const mockFn = jest.fn();
        buttonSeachHeader.click(mockFn());
        expect(mockFn).toHaveBeenCalled();
        expect(filteredProducts.length).toBe(2);
    })

    it('Change button signin', () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <Header />
                </Provider>
            </BrowserRouter>
        )
        const signinButton = screen.getByLabelText('signin-btn');
        expect(signinButton).toBeInTheDocument()
    })

    it('Renders logout button if user is authenticated', () => {
        jest.spyOn(Redux, 'useSelector').mockReturnValueOnce({ userInfo: {} });
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <Header />
                </Provider>
            </BrowserRouter>
        )
        const logoutButton = screen.getByLabelText('logout-btn');
        expect(logoutButton).toBeInTheDocument()
    })
})
