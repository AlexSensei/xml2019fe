import React from 'react';
import { Formik, Field } from 'formik';
import PropTypes from 'prop-types';

import { TextInputWithLabel } from '../shared/formFields/TextInputWithLabel';
import { signInValidationRules } from '../../validation/auth';
import { PasswordInputWithLabel } from '../shared/formFields/PasswordInputWithLabel';

const SignInForm = ({ handleSignIn, signInError }) => (
  <main>
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={signInValidationRules}
      onSubmit={handleSignIn}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <h3>Sign in</h3>
          <Field
            component={TextInputWithLabel}
            label="Email"
            placeholder="Enter email"
            name="email"
            type="email"
          />

          <Field
            component={PasswordInputWithLabel}
            label="Password"
            placeholder="Enter password"
            name="password"
          />

          {signInError && <p>Invalid credentials</p>}

          <p>
            <button type="submit">Sign in</button>
          </p>
        </form>
      )}
    </Formik>

    <div>
      You dont have an account?
      <a href="/sign-up">Sign up</a>
    </div>
  </main>
);

SignInForm.propTypes = {
  handleSignIn: PropTypes.func,
  signInError: PropTypes.bool,
  loader: PropTypes.bool
};

export default SignInForm;
