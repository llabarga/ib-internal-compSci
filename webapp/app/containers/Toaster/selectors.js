import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the toaster state domain
 */

const selectToasterDomain = state => state.toaster || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Toaster
 */

const makeSelectToaster = () =>
  createSelector(
    selectToasterDomain,
    substate => substate,
  );

export default makeSelectToaster;
export { selectToasterDomain };
