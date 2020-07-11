import React, { useState } from 'react';
import { Formik, Field } from 'formik';
import PropTypes from 'prop-types';

import { TextInputWithLabel } from '../shared/formFields/TextInputWithLabel';
import { signInValidationRules } from '../../validation/auth';
import { PasswordInputWithLabel } from '../shared/formFields/PasswordInputWithLabel';
import LoaderWrapper from '../shared/LoaderWrapper';

const SignInForm = ({ handleSignIn, signInError, loader }) => {
  const [userType, setUserType] = useState('author');
  return (
    <LoaderWrapper isLoading={loader} loadingText="Signing in ...">
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={signInValidationRules}
        onSubmit={values => handleSignIn({ ...values, userType })}
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

            <button onClick={() => setUserType('author')} type="submit">
              autor
            </button>
            <button onClick={() => setUserType('reviewer')} type="submit">
              reviewer
            </button>
            <button onClick={() => setUserType('publisher')} type="submit">
              publisher
            </button>

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
    </LoaderWrapper>
  );
};

SignInForm.propTypes = {
  handleSignIn: PropTypes.func,
  signInError: PropTypes.bool,
  loader: PropTypes.bool
};

export default SignInForm;
