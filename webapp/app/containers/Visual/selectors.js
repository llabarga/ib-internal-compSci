import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the visual state domain
 */

const selectVisualDomain = state => state.visual || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Visual
 */

const makeSelectVisual = () =>
  createSelector(selectVisualDomain, substate => substate);

export default makeSelectVisual;
export { selectVisualDomain };
