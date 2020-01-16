import { USER_AUTH_SET, USER_LOGOUT } from '../actionTypes/UserActionTypes';

export const userAuthSet = payload => ({
  type: USER_AUTH_SET,
  payload
});

export const userLogout = payload => ({
  type: USER_LOGOUT,
  payload
});
