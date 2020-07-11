import React from 'react';
import { Formik, Field } from 'formik';

import { TextInputWithLabel } from '../shared/formFields/TextInputWithLabel';
import { PasswordInputWithLabel } from '../shared/formFields/PasswordInputWithLabel';
import { signUpValidationRules } from '../../validation/auth';
import LoaderWrapper from '../shared/LoaderWrapper';

const SignUpForm = ({ handleSignUp, signUpError, loader }) => {
  return (
    <LoaderWrapper isLoading={loader} loadingText="Signing up ...">
      <Formik
        initialValues={{ email: '', password: '', firstName: '', lastName: '' }}
        onSubmit={handleSignUp}
        validationSchema={signUpValidationRules}
      >
        {({ handleSubmit }) => (
          <form id="signUpForm" onSubmit={handleSubmit}>
            <h3>Sign Up</h3>
            <Field
              component={TextInputWithLabel}
              label="First name"
              placeholder="Enter first name"
              name="firstName"
              type="text"
            />

            <Field
              component={TextInputWithLabel}
              label="Last name"
              placeholder="Enter last name"
              name="lastName"
              type="text"
            />
            <Field
              component={TextInputWithLabel}
              label="Email"
              placeholder="Enter email"
              name="email"
              type="email"
            />
            {signUpError && <p>Email already taken</p>}

            <Field
              component={PasswordInputWithLabel}
              label="Password"
              placeholder="Enter Password"
              name="password"
              type="password"
            />

            <button type="submit">Sign up</button>
          </form>
        )}
      </Formik>
      <div>
        Already have an account?
        <a href="/sign-in">Sign in</a>
      </div>
    </LoaderWrapper>
  );
};

export default SignUpForm;
