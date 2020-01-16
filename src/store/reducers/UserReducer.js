import produce from 'immer';

import { USER_AUTH_SET } from '../actionTypes/UserActionTypes';

export const initialState = {
  auth: localStorage.getItem('access_token')
};

/* eslint-disable default-case, no-param-reassign */
const userReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case USER_AUTH_SET:
        draft.auth = action.payload;
        break;
    }
  });

export default userReducer;
