/*
 *
 * App reducer
 *
 */
import produce from 'immer';
import { loggedIn } from 'utils/auth';
import {
  SET_ACTIVE_PROJECT,
  SET_AUTH,
  SET_ORG,
  SET_PROJECTS,
  PUSH_PROJECT,
  SET_USER,
  SET_PERMISSIONS,
} from './constants';


export const initialState = {
  loggedIn: loggedIn(),
  organisation: {},
  projects: [],
  projectActive: -1,
  user: {},
  permissions: [],
  creating_project: false,
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = produce((draft, action) => {
  switch (action.type) {
    case SET_ACTIVE_PROJECT:
      draft.projectActive = action.projectActive;
      break;
    case SET_AUTH:
      draft.loggedIn = action.loggedIn;
      break;
    case SET_ORG:
      draft.organisation = action.organisation;
      break;
    case SET_PROJECTS:
      draft.projects = action.projects;
      break;
    case PUSH_PROJECT:
      draft.projects.push(action.project);
      break;
    case SET_USER:
      draft.user = action.user;
      break;
    case SET_PERMISSIONS:
      draft.permissions = action.permissions;
      break;
  }
}, initialState);

export default appReducer;
