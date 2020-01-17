import { combineReducers } from 'redux';
import signInReducer from './SignInReducer';
import signUpReducer from './SignUpReducer';
import useReducer from './UserReducer';
import articleReducer from './ArticleReducer';

export default combineReducers({
  signIn: signInReducer,
  signUp: signUpReducer,
  user: useReducer,
  article: articleReducer
});
