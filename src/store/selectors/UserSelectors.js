import { createSelector } from 'reselect';

import reducers from '../reducers';

const selectUserDomain = state => state.user || reducers;

const makeSelectUser = () =>
  createSelector(selectUserDomain, substate => substate);

const makeSelectUserAuth = () =>
  createSelector(selectUserDomain, substate => substate.auth);

export default makeSelectUser;
export { selectUserDomain, makeSelectUserAuth };
