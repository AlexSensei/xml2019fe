import { all, takeLatest } from 'redux-saga/effects';

import { SIGN_IN } from '../actionTypes/SignInActionTypes';
import { handleSignIn } from './SignInSagas';
import { SIGN_UP } from '../actionTypes/SignUpActionTypes';
import { handleSignUp } from './SignUpSagas';
import { USER_LOGOUT, USER_GET } from '../actionTypes/UserActionTypes';
import { handleLogout, handleUserGet } from './UserSagas';
import { ARTICLE_PUBLISH } from '../actionTypes/ArticleActionTypes';
import { handleArticlePublish } from './ArticleSagas';

export default function* rootSaga() {
  yield all([
    takeLatest(SIGN_IN, handleSignIn),
    takeLatest(SIGN_UP, handleSignUp),
    takeLatest(USER_LOGOUT, handleLogout),
    takeLatest(USER_GET, handleUserGet),
    takeLatest(ARTICLE_PUBLISH, handleArticlePublish)
  ]);
}
