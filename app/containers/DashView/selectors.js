import { createSelector } from 'reselect';

/**
 * Direct selector to the dashView state domain
 */
const selectDashViewDomain = () => (state) => state.get('dashView');

/**
 * Other specific selectors
 */


/**
 * Default selector used by DashView
 */

const makeSelectDashView = () => createSelector(
  selectDashViewDomain(),
  (substate) => substate.toJS()
);

export default makeSelectDashView;
export {
  selectDashViewDomain,
};
