import React from 'react';
import { render, screen } from '@testing-library/react';
import Slider from '../Slider';

const imagesMock = ['./img1.png', './img2.png'];

describe('Test Product', () => {
  it('renders (smoke test)', () => {
    render(<Slider images={imagesMock} />);

    expect(screen.queryByLabelText('slider')).toBeInTheDocument();
  });

  it('doesn`t render if not provided with images', () => {
    render(<Slider />);

    expect(screen.queryByLabelText('slider')).not.toBeInTheDocument();
  });

  it('renders slides with provided images', () => {
    render(<Slider images={imagesMock} />);

    expect(screen.queryAllByRole('img').length)
      .toBe(imagesMock.length ** 2);
    expect(screen.queryAllByLabelText('slide item', { exact: false }).length)
      .toBe(imagesMock.length);
  });
});
