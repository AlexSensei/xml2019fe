import React, { useState } from "react";
import { ErrorMessage } from "formik";
import PropTypes from "prop-types";

export const PasswordInputWithLabel = ({
  field,
  form,
  label,
  placeholder,
  ...props
}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div>
      <div>
        <label htmlFor="">{label}</label>
        <input
          {...field}
          {...props}
          type={passwordVisible ? "text" : "password"}
          placeholder={placeholder}
        />
      </div>
      <ErrorMessage name={field.name}>
        {(errorMessage) => <p>{errorMessage}</p>}
      </ErrorMessage>
    </div>
  );
};

PasswordInputWithLabel.propTypes = {
  field: PropTypes.object,
  form: PropTypes.object,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};
