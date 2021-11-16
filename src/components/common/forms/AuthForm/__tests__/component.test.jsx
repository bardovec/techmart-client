import React from 'react';
import { render } from '@testing-library/react';
// eslint-disable-next-line jest/no-mocks-import
import { mockFieldsInitData, mockValidationSchema } from '../stubs';

import AuthForm from '../component.jsx';

jest.mock('react-redux', () => (
  {
    useSelector: () => ({}),
  }
));

const props = {
  formFieldsData: mockFieldsInitData,
  initialValues: mockValidationSchema.default(),
  submitHandler: jest.fn(),
  validationSchema: mockValidationSchema,
  submitBlockProps: {
    isSubmitting: true,
    formClass: '',
    submitSelector: (state) => state,
    buttonText: 'Test',
    buttonAddedStyles: {},
  },
};
describe('AuthForm', () => {
  it('renders spare helper texts by default if given prop withEmptyHelperTexts', () => {
    const { container, rerender } = render(<AuthForm {...props} />);

    expect(container.querySelector('p.MuiFormHelperText-root')).toBeNull();

    rerender(<AuthForm {...props} withEmptyHelperTexts />);

    expect(container.querySelector('p.MuiFormHelperText-root')).toBeInTheDocument();
  });
});
