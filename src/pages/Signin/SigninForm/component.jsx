import React, { useCallback } from 'react';

import { useActions } from '../../../hooks/useActions';
import AuthForm from '../../../components/common/forms/AuthForm';

import {
  signinFieldsInitData as signinFormFieldsData,
  signinValidationSchema,
} from './constants';

const initialValues = signinValidationSchema.default();
const submitBlockProps = {
  submitSelector: (state) => state.userLogin,
  buttonText: 'Вход',
};

const SigninForm = () => {
  const { login } = useActions();
  const submitHandler = useCallback(async (values) => login(values), [login]);

  return (
    <AuthForm
      withEmptyHelperTexts
      formFieldsData={signinFormFieldsData}
      validationSchema={signinValidationSchema}
      initialValues={initialValues}
      submitHandler={submitHandler}
      submitBlockProps={submitBlockProps}
    />
  );
};

export default SigninForm;
