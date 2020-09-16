import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Default selector used by App
 */

const selectAppDomain = state => state.app || initialState;

const makeSelectApp = () =>
  createSelector(selectAppDomain, substate => substate);

/**
 * Other specific selectors
 */

const selectRouter = state => state.router;

const makeSelectLocation = () =>
  createSelector(selectRouter, routerState => routerState.location);

const makeSelectUser = () =>
  createSelector(selectAppDomain, substate => substate.user);

const makeSelectRole = () =>
  createSelector(selectAppDomain, substate => substate.user.role);

const makeSelectOrganisation = () =>
  createSelector(selectAppDomain, substate => substate.organisation);

const makeSelectLoggedIn = () =>
  createSelector(selectAppDomain, substate => substate.loggedIn);

const makeSelectProjects = () =>
  createSelector(selectAppDomain, substate => substate.projects);

const makeSelectProjectActive = () =>
  createSelector(selectAppDomain, substate => substate.projectActive);

const makeSelectCreatingProject = () =>
  createSelector(selectAppDomain, (substate) => substate.creating_project);

export default makeSelectApp;
export {
  selectAppDomain,
  makeSelectLocation,
  makeSelectLoggedIn,
  makeSelectOrganisation,
  makeSelectProjectActive,
  makeSelectProjects,
  makeSelectRole,
  makeSelectUser,
  makeSelectCreatingProject,
};
