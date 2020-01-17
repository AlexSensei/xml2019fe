import { put, call } from 'redux-saga/effects';

import AuthService from '../../services/AuthService';
import { userAuthSet, userSet } from '../actions/UserActions';
import UserService from '../../services/UserService';

export function* handleLogout({ payload }) {
  try {
    yield call(AuthService.logout, payload);
    yield put(userAuthSet(false));
    window.location.href = '/sign-in';
  } catch (error) {
    console.log(error);
  }
}

export function* handleUserGet() {
  try {
    const { data } = yield call(UserService.getUser);
    yield put(userSet(data));
  } catch (error) {
    console.log(error);
  }
}
