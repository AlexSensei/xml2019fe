import { createSelector } from 'reselect';

import reducers from '../reducers';

const selectArticleDomain = state => state.article || reducers;

const makeSelectArticle = () =>
  createSelector(selectArticleDomain, substate => substate);

const makeSelectArticleLoader = () =>
  createSelector(selectArticleDomain, substate => substate.loader);

export default makeSelectArticle;
export { selectArticleDomain, makeSelectArticleLoader };
