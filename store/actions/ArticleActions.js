import {
  ARTICLE_PUBLISH,
  ARTICLE_PUBLISH_LOADER_SET,
  ARTICLES_GET,
  ARTICLES_SET,
  ARTICLES_MY_GET,
  ARTICLES_MY_SET,
  ARTICLE_GET,
  ARTICLE_SET,
  ARTICLES_TO_REVIEW_GET,
  ARTICLES_TO_REVIEW_SEt,
} from "../actionTypes/ArticleActionTypes";

export const articlePublish = (payload) => ({
  type: ARTICLE_PUBLISH,
  payload,
});

export const articlePublishLoaderSet = (payload) => ({
  type: ARTICLE_PUBLISH_LOADER_SET,
  payload,
});

export const articlesGet = (payload) => ({
  type: ARTICLES_GET,
  payload,
});

export const articlesSet = (payload) => ({
  type: ARTICLES_SET,
  payload,
});

export const articlesMyGet = () => ({
  type: ARTICLES_MY_GET,
});

export const articlesMySet = (payload) => ({
  type: ARTICLES_MY_SET,
  payload,
});

export const articleGet = (payload) => ({
  type: ARTICLE_GET,
  payload,
});

export const articleSet = (payload) => ({
  type: ARTICLE_SET,
  payload,
});

export const articlesReviewGet = () => ({
  type: ARTICLES_TO_REVIEW_GET,
});

export const articlesReviewSet = (payload) => ({
  type: ARTICLES_TO_REVIEW_SEt,
  payload,
});
