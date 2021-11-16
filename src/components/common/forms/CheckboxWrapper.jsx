import React from 'react';
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from '@material-ui/core';
import { useField, useFormikContext } from 'formik';

const CheckboxWrapper = ({
  name, label, legend,
}) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  const handleChange = (evt) => {
    const { checked } = evt.target;
    setFieldValue(name, checked);
  };

  const configCheckbox = {
    ...field,
    onChange: handleChange,
  };

  const configFormControl = {};
  if (meta && meta.touched && meta.error) {
    configFormControl.error = true;
    configFormControl.helperText = meta.error;
  }

  return (
    <FormControl {...configFormControl}>
      <FormLabel component='legend'>{legend}</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox {...configCheckbox} />}
          label={label}
        />
      </FormGroup>
      {configFormControl && (
        <span
          style={{
            color: '#f44336',
            fontFamily: 'sans-serif',
            fontSize: '0.75rem',
          }}
        >
          {configFormControl.helperText}
        </span>
      )}
    </FormControl>
  );
};

export default CheckboxWrapper;
