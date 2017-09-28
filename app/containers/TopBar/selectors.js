import { createSelector } from 'reselect';

/**
 * Direct selector to the topBar state domain
 */
const selectTopBarDomain = () => (state) => state.get('topBar');

/**
 * Other specific selectors
 */
const connectionSelector = () => (state) => state.get('topBar').toJS().connected;

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
