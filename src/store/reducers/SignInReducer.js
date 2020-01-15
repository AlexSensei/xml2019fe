import produce from 'immer';

import {
  SIGN_IN_ERROR_SET,
  SIGN_IN_LOADER_SET
} from '../actionTypes/SignInActionTypes';

export const initialState = {
  loader: false,
  signInError: false
};

/* eslint-disable default-case, no-param-reassign */
const signInReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SIGN_IN_ERROR_SET:
        draft.signInError = action.payload;
        break;
      case SIGN_IN_LOADER_SET:
        draft.loader = action.payload;
        break;
    }
  });

export default signInReducer;
