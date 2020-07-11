import { put, call } from "redux-saga/effects";

import ArticleService from "../../services/ArticleService";
import {
  articlePublishLoaderSet,
  articlesSet,
  articlesMySet,
  articleSet,
  articlesReviewSet,
} from "../actions/ArticleActions";

export function* handleArticlePublish({ payload }) {
  try {
    yield put(articlePublishLoaderSet(true));
    yield call(ArticleService.submitArticle, payload);
    // window.location.href = '/';
  } catch (error) {
    console.log(error);
  } finally {
    yield put(articlePublishLoaderSet(false));
  }
}

export function* handleArticlesGet({ payload }) {
  try {
    const { data } = yield call(ArticleService.getArticles, payload);
    yield put(articlesSet(data));
  } catch (error) {
    console.log(error);
  }
}

export function* handleArticlesMyGet({ payload }) {
  try {
    const { data } = yield call(ArticleService.getMyArticles, payload);
    yield put(articlesMySet(data));
  } catch (error) {
    console.log(error);
  }
}

export function* handleArticleGet({ payload }) {
  try {
    const { data } = yield call(ArticleService.getArticle, payload);
    yield put(articleSet(data));
  } catch (error) {
    console.log(error);
  }
}

export function* handleArticlesReviewGet({ payload }) {
  try {
    const { data } = yield call(ArticleService.getReviewArticles, payload);
    yield put(articlesReviewSet(data));
  } catch (error) {
    console.log(error);
  }
}
