import React from 'react';
import { Provider } from 'react-redux';
import { unmountComponentAtNode } from 'react-dom';
import { act, render } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
import store from '../../../redux/store.js';
import Products from '../index.js';

let container = null;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});
afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test('Render Products', () => {
  act(() => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Products />
        </Provider>
      </BrowserRouter>,
      container,
    );
  });
});
