import React from 'react';
import { Button } from '@material-ui/core';
import { TailSpin, useLoading } from '@agney/react-loading';
import { useSelector } from 'react-redux';
import { defaultStyles } from './styles';
import { useModifiedStyles } from '../../../../../hooks/useModifiedStyles';

const loaderConfig = {
  loading: true,
  indicator: <TailSpin width='20' />,
};

const SubmitBlock = ({
  isSubmitting,
  formClass,
  submitSelector,
  buttonText,
  buttonAddedStyles,
}) => {
  const submitStatus = useSelector(submitSelector);
  const { containerProps, indicatorEl } = useLoading(loaderConfig);
  const classes = useModifiedStyles(defaultStyles, {
    ...buttonAddedStyles,
    notification: {
      color: submitStatus.error ? 'red' : 'olive',
    },
  });

  return (
    <div className={classes.wrapper}>
      <Button
        {...containerProps}
        type='submit'
        disabled={isSubmitting}
        variant='contained'
        className={`${formClass} ${classes.button}`}
      >
        {isSubmitting ? indicatorEl : buttonText}
      </Button>
      {submitStatus.loading === false
        && (
        <h3 className={classes.notification}>
          {submitStatus.error
            ? 'Ошибка авторизации, попробуйте позже'
            : 'Вы успешно авторизовались'}
        </h3>
        )}
    </div>
  );
};

export default SubmitBlock;
