import { all, takeLatest } from "redux-saga/effects";

import { SIGN_IN } from "../actionTypes/SignInActionTypes";
import { handleSignIn } from "./SignInSagas";
import { SIGN_UP } from "../actionTypes/SignUpActionTypes";
import { handleSignUp } from "./SignUpSagas";
import { USER_LOGOUT, USER_GET } from "../actionTypes/UserActionTypes";
import { handleLogout, handleUserGet } from "./UserSagas";
import {
  ARTICLE_PUBLISH,
  ARTICLES_GET,
  ARTICLES_MY_GET,
  ARTICLE_GET,
  ARTICLES_TO_REVIEW_GET,
} from "../actionTypes/ArticleActionTypes";
import {
  handleArticlePublish,
  handleArticlesGet,
  handleArticlesMyGet,
  handleArticleGet,
  handleArticlesReviewGet,
} from "./ArticleSagas";

export default function* rootSaga() {
  yield all([
    takeLatest(SIGN_IN, handleSignIn),
    takeLatest(SIGN_UP, handleSignUp),
    takeLatest(USER_LOGOUT, handleLogout),
    takeLatest(USER_GET, handleUserGet),
    takeLatest(ARTICLE_PUBLISH, handleArticlePublish),
    takeLatest(ARTICLES_GET, handleArticlesGet),
    takeLatest(ARTICLES_MY_GET, handleArticlesMyGet),
    takeLatest(ARTICLE_GET, handleArticleGet),
    takeLatest(ARTICLES_TO_REVIEW_GET, handleArticlesReviewGet),
  ]);
}
