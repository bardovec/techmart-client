import React, { useCallback } from 'react';

import { useActions } from '../../../hooks/useActions';
import AuthForm from '../../../components/common/forms/AuthForm';

import {
  signupFieldsInitData as signupFormFieldsData,
  signupValidationSchema,
} from './constants';

const initialValues = {
  ...signupValidationSchema.default(),
  isAdmin: false,
  enabled: true,
};
const submitBlockProps = {
  submitSelector: (state) => state.userRegister,
  buttonText: 'Регистрация',
};

const SignupForm = () => {
  const { register } = useActions();
  const submitHandler = useCallback(async (values) => register(values), [register]);

  return (
    <AuthForm
      formFieldsData={signupFormFieldsData}
      validationSchema={signupValidationSchema}
      initialValues={initialValues}
      submitHandler={submitHandler}
      withEmptyHelperTexts
      submitBlockProps={submitBlockProps}
    />
  );
};

export default SignupForm;
