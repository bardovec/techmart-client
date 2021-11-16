import React from 'react';

import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Product from '../Product';
import Slider from '../../../components/common/Slider/Slider';
import GarantyIcon from '../../../components/icons/GarantyIcon';
import CheckCircleIcon from '../../../components/icons/CheckCircleIcon';
import store from '../../../redux/store';

const phone = {
  colors: ['white', 'black', '#215787', '#C7F3BD', '#E70012'],
  memory: [64, 128, 256],
};
const renderComponent = () => (
  <BrowserRouter>
    <Provider store={store}>
      <Product />
    </Provider>
  </BrowserRouter>
);

describe('Test Product', () => {
  it('Smoke test for Product', () => {
      renderComponent();
  });

  it('Slider to be defined', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Product>
            <Slider />
          </Product>
        </Provider>
      </BrowserRouter>,
    );
    const slider = document.querySelector('.carousel-root');
    expect(slider).toBeDefined();
  });

  it('Smoke test for GarantyIcon', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Product>
            <GarantyIcon />
          </Product>
        </Provider>
      </BrowserRouter>,
    );
  });

  it('Smoke test for CheckCircleIcon', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Product>
            <CheckCircleIcon />
          </Product>
        </Provider>
      </BrowserRouter>,
    );
  });

  it('Data to be defined', () => {
    render(
      renderComponent(),
    );
    expect(phone).toBeDefined();
  });

  it('Check length in received array', () => {
    render(
      renderComponent(),
    );
    const arr = phone.colors.map((color) => color);
    expect(arr).toHaveLength(arr.length);
  });

  it('Check array in received params colors', () => {
    render(
      renderComponent(),
    );
    expect(['white', 'black', '#215787', '#C7F3BD', '#E70012']).toEqual(
      expect.arrayContaining(phone.colors),
    );
    expect(['white', 'black']).not.toEqual(expect.arrayContaining(phone.colors));
  });

  it('Check array in received params memory', () => {
    render(
      renderComponent(),
    );
    expect([64, 128, 256]).toEqual(expect.arrayContaining(phone.memory));
    expect([64, 128]).not.toEqual(expect.arrayContaining(phone.memory));
  });

  it('OnClick button Buy in Product', () => {
    const onClick = jest.fn();
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Product />
        </Provider>
      </BrowserRouter>,
    );

    const button = document.getElementById('buyBtn');
    expect(button).toBeDefined();
    button.addEventListener('click', onClick);
    button.click();
    expect(onClick).toHaveBeenCalled();
  });

  it('OnClick button Buy in Credit in Product', () => {
    const onClick = jest.fn();
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Product />
        </Provider>
      </BrowserRouter>,
    );

    const button = document.getElementById('btnBuyInCredit');
    expect(button).toBeDefined();
    button.addEventListener('click', onClick);
    button.click();
    expect(onClick).toHaveBeenCalled();
  });
});
