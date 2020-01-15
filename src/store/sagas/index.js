import { all, takeLatest } from 'redux-saga/effects';

import { SIGN_IN } from '../actionTypes/SignInActionTypes';
import { handleSignIn } from './SignInSagas';

export default function* rootSaga() {
  yield all([takeLatest(SIGN_IN, handleSignIn)]);
}
