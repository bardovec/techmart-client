import React from 'react';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { FormControl, FormLabel } from '@material-ui/core';
import { useField } from 'formik';

const renderOptions = (options) => options.map((option) => (
  <FormControlLabel
    key={option}
    value={option}
    control={<Radio />}
    label={option}
  />
));

const RadioGroupWrapper = ({
  name, legend, options, children, ...props
}) => {
  const [field, meta] = useField(name);
  const fieldName = name || field.name;

  const configFormControl = {};
  if (meta && meta.touched && meta.error) {
    configFormControl.error = true;
    configFormControl.helperText = meta.error;
  }

  return (
    <FormControl {...configFormControl}>
      <FormLabel component='legend'>{legend}</FormLabel>
      <RadioGroup row {...field} {...props} name={fieldName}>
        {options ? renderOptions(options) : children}
      </RadioGroup>

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

export default RadioGroupWrapper;
