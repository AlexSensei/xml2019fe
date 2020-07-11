import produce from "immer";

import {
  ARTICLE_PUBLISH_LOADER_SET,
  ARTICLES_SET,
  ARTICLES_MY_SET,
  ARTICLE_SET,
  ARTICLES_TO_REVIEW_SEt,
} from "../actionTypes/ArticleActionTypes";

export const initialState = {
  loader: false,
  articles: [],
  myArticles: [],
  article: {},
  reviewArticles: [],
};

/* eslint-disable default-case, no-param-reassign */
const articleReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case ARTICLE_PUBLISH_LOADER_SET:
        draft.loader = action.payload;
        break;
      case ARTICLES_SET:
        draft.articles = action.payload;
        break;
      case ARTICLES_MY_SET:
        draft.myArticles = action.payload;
        break;
      case ARTICLE_SET:
        draft.article = action.payload;
        break;
      case ARTICLES_TO_REVIEW_SEt:
        draft.reviewArticles = action.payload;
        break;
    }
  });

export default articleReducer;
