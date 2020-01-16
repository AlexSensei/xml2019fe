import React from 'react';
import SignUpForm from '../components/auth/SignUpForm';
import { useDispatch, useSelector } from 'react-redux';

import { signUp } from '../store/actions/SignUpActions';
import {
  makeSelectSignUpLoader,
  makeSelectSignUpError
} from '../store/selectors/SignUpSelectors';
import withIsAuth from '../utils/hoc/withIsAuth';
import Layout from '../components/layout';

const SignUp = () => {
  const dispatch = useDispatch();

  const signUpErrors = useSelector(makeSelectSignUpError());
  const signUpLoader = useSelector(makeSelectSignUpLoader());

  const handleSignUp = data => dispatch(signUp(data));

  return (
    <Layout>
      <SignUpForm
        handleSignUp={handleSignUp}
        loader={signUpLoader}
        signUpError={signUpErrors}
      />
    </Layout>
  );
};

export default withIsAuth(SignUp);
