import { put, call } from 'redux-saga/effects';

import { signInLoaderSet, signInErrorSet } from '../actions/SignInActions';
import AuthService from '../../services/AuthService';

export function* handleSignIn({ payload }) {
  try {
    yield put(signInLoaderSet(true));
    yield put(signInErrorSet(false));
    yield call(AuthService.login, payload);
    window.location.href = '/';
  } catch (error) {
    try {
      if (error.response.status === 401) {
        yield put(signInErrorSet(true));
      }
    } catch (e) {
      console.log(e);
    }
  } finally {
    yield put(signInLoaderSet(false));
  }
}
