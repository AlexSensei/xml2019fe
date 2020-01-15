import { all, takeLatest } from 'redux-saga/effects';

import { SIGN_IN } from '../actionTypes/SignInActionTypes';
import { handleSignIn } from './SignInSagas';
import { SIGN_UP } from '../actionTypes/SignUpActionTypes';
import { handleSignUp } from './SignUpSagas';

export default function* rootSaga() {
  yield all([
    takeLatest(SIGN_IN, handleSignIn),
    takeLatest(SIGN_UP, handleSignUp)
  ]);
}
