import {
  USER_AUTH_SET,
  USER_LOGOUT,
  USER_GET,
  USER_SET
} from '../actionTypes/UserActionTypes';

export const userAuthSet = payload => ({
  type: USER_AUTH_SET,
  payload
});

export const userLogout = payload => ({
  type: USER_LOGOUT,
  payload
});

export const userGet = () => ({
  type: USER_GET
});

export const userSet = payload => ({
  type: USER_SET,
  payload
});
