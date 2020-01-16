import React from 'react';

import SignInForm from '../components/auth/SignInForm';
import { useDispatch, useSelector } from 'react-redux';
import {
  makeSelectSignInError,
  makeSelectSignInLoader
} from '../store/selectors/SignInSelectors';
import { signIn } from '../store/actions/SignInActions';
import LoaderWrapper from '../components/shared/LoaderWrapper';
import withIsAuth from '../utils/hoc/withIsAuth';

const SignIn = () => {
  const dispatch = useDispatch();

  const signInError = useSelector(makeSelectSignInError());
  const signInLoader = useSelector(makeSelectSignInLoader());

  const handleSignIn = data => dispatch(signIn(data));

  return (
    <div>
      <SignInForm
        handleSignIn={handleSignIn}
        signInError={signInError}
        loader={signInLoader}
      />
    </div>
  );
};

export default withIsAuth(SignIn);
