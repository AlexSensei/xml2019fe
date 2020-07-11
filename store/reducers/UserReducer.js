import produce from "immer";
import Cookies from "js-cookie";
import { USER_AUTH_SET, USER_SET } from "../actionTypes/UserActionTypes";

export const initialState = {
  auth: Cookies.get("access_token"),
  user: {},
};

/* eslint-disable default-case, no-param-reassign */
const userReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case USER_AUTH_SET:
        draft.auth = action.payload;
        break;
      case USER_SET:
        draft.user = action.payload;
        break;
    }
  });

export default userReducer;
