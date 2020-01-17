import { put, call } from 'redux-saga/effects';

import ArticleService from '../../services/ArticleService';
import { articlePublishLoaderSet } from '../actions/ArticleActions';

export function* handleArticlePublish({ payload }) {
  try {
    yield put(articlePublishLoaderSet(true));
    yield call(ArticleService.submitArticle, payload);
    window.location.href = '/';
  } catch (error) {
    console.log(error);
  } finally {
    yield put(articlePublishLoaderSet(false));
  }
}
