import produce from 'immer';

import {
  SIGN_UP_ERROR_SET,
  SIGN_UP_LOADER_SET
} from '../actionTypes/SignUpActionTypes';

export const initialState = {
  loader: false,
  signUpError: false
};

/* eslint-disable default-case, no-param-reassign */
const signUpReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SIGN_UP_ERROR_SET:
        draft.signUpError = action.payload;
        break;
      case SIGN_UP_LOADER_SET:
        draft.loader = action.payload;
        break;
    }
  });

export default signUpReducer;
