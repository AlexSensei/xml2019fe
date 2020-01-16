import { put, call } from 'redux-saga/effects';

import AuthService from '../../services/AuthService';
import { userAuthSet } from '../actions/UserActions';

export function* handleLogout({ payload }) {
  try {
    yield call(AuthService.logout, payload);
    yield put(userAuthSet(false));
    window.location.href = '/sign-in';
  } catch (error) {
    console.log(error);
  }
}
