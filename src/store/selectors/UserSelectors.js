import { createSelector } from 'reselect';

import reducers from '../reducers';

const selectUserDomain = state => state.user || reducers;

const makeSelectUser = () =>
  createSelector(selectUserDomain, substate => substate);

const makeSelectUserAuth = () =>
  createSelector(selectUserDomain, substate => substate.auth);

const makeSelectUserData = () =>
  createSelector(selectUserDomain, substate => substate.user);

export default makeSelectUser;
export { selectUserDomain, makeSelectUserAuth, makeSelectUserData };
