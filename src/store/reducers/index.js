import { combineReducers } from 'redux';
import signInReducer from './SignInReducer';
import signUpReducer from './SignUpReducer';

export default combineReducers({
  signIn: signInReducer,
  signUp: signUpReducer
});
