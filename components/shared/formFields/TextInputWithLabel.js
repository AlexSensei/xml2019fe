import React from 'react';
import { ErrorMessage } from 'formik';
import PropTypes from 'prop-types';

export const TextInputWithLabel = ({
  field,
  label,
  placeholder,
  type,
  ...props
}) => (
  <>
    <div>
      <label htmlFor="">{label}</label>
      <input {...field} {...props} type={type} placeholder={placeholder} />
    </div>
    <ErrorMessage name={field.name}>
      {errorMessage => <p>{errorMessage}</p>}
    </ErrorMessage>
  </>
);

TextInputWithLabel.propTypes = {
  field: PropTypes.object,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string
};
