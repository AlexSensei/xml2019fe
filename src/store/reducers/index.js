import { combineReducers } from 'redux';
import signInReducer from './SignInReducer';
import signUpReducer from './SignUpReducer';
import useReducer from './UserReducer';

export default combineReducers({
  signIn: signInReducer,
  signUp: signUpReducer,
  user: useReducer
});
