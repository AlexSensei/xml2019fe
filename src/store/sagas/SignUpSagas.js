import { put, call } from 'redux-saga/effects';

import { signUpErrorSet, signUpLoaderSet } from '../actions/SignUpActions';
import AuthService from '../../services/AuthService';

export function* handleSignUp({ payload }) {
  try {
    yield put(signUpLoaderSet(true));
    yield put(signUpErrorSet(false));
    yield call(AuthService.signUp, payload);
    window.location.href = '/';
  } catch (error) {
    try {
      yield put(signUpErrorSet(true));
    } catch (e) {
      console.log(e);
    }
    console.log(error);
  } finally {
    yield put(signUpLoaderSet(false));
  }
}
