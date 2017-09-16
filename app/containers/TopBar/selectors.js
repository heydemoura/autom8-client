import { createSelector } from 'reselect';

/**
 * Direct selector to the topBar state domain
 */
const selectTopBarDomain = () => (state) => state.get('topBar');

/**
 * Other specific selectors
 */
const connectionSelector = () => (state) => {
  const connection = state.get('pins').toJS();
  delete connection.data;
  return connection;
};


/**
 * Default selector used by TopBar
 */

const makeSelectTopBar = () => createSelector(
  selectTopBarDomain(),
  (substate) => substate.toJS()
);

export default makeSelectTopBar;
export {
  selectTopBarDomain,
  connectionSelector,
};
