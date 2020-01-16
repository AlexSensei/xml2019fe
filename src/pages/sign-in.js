import React from 'react';

import SignInForm from '../components/auth/SignInForm';
import { useDispatch, useSelector } from 'react-redux';
import {
  makeSelectSignInError,
  makeSelectSignInLoader
} from '../store/selectors/SignInSelectors';
import { signIn } from '../store/actions/SignInActions';
import withIsAuth from '../utils/hoc/withIsAuth';
import Layout from '../components/layout';

const SignIn = () => {
  const dispatch = useDispatch();

  const signInError = useSelector(makeSelectSignInError());
  const signInLoader = useSelector(makeSelectSignInLoader());

  const handleSignIn = data => dispatch(signIn(data));

  return (
    <Layout>
      <SignInForm
        handleSignIn={handleSignIn}
        signInError={signInError}
        loader={signInLoader}
      />
    </Layout>
  );
};

export default withIsAuth(SignIn);
