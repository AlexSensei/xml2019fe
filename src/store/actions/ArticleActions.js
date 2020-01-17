import {
  ARTICLE_PUBLISH,
  ARTICLE_PUBLISH_LOADER_SET
} from '../actionTypes/ArticleActionTypes';

export const articlePublish = payload => ({
  type: ARTICLE_PUBLISH,
  payload
});

export const articlePublishLoaderSet = payload => ({
  type: ARTICLE_PUBLISH_LOADER_SET,
  payload
});
