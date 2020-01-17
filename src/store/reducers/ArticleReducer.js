import produce from 'immer';

import { ARTICLE_PUBLISH_LOADER_SET } from '../actionTypes/ArticleActionTypes';

export const initialState = {
  loader: false
};

/* eslint-disable default-case, no-param-reassign */
const articleReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ARTICLE_PUBLISH_LOADER_SET:
        draft.loader = action.payload;
        break;
    }
  });

export default articleReducer;
