import { createSelector } from "reselect";

import reducers from "../reducers";

const selectArticleDomain = (state) => state.article || reducers;

const makeSelectArticle = () =>
  createSelector(selectArticleDomain, (substate) => substate);

const makeSelectArticleLoader = () =>
  createSelector(selectArticleDomain, (substate) => substate.loader);

const makeSelectArticles = () =>
  createSelector(selectArticleDomain, (substate) => substate.articles);

const makeSelectMyArticles = () =>
  createSelector(selectArticleDomain, (substate) => substate.myArticles);

const makeSelectArticleItem = () =>
  createSelector(selectArticleDomain, (substate) => substate.article);

const makeSelectArticlesReview = () =>
  createSelector(selectArticleDomain, (substate) => substate.reviewArticles);

const makeSelectPendingArticles = () =>
  createSelector(selectArticleDomain, (substate) => substate.pendingArticles);

export default makeSelectArticle;
export {
  selectArticleDomain,
  makeSelectArticleLoader,
  makeSelectArticles,
  makeSelectMyArticles,
  makeSelectArticleItem,
  makeSelectArticlesReview,
  makeSelectPendingArticles,
};
