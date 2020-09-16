import {
  takeEvery,
  takeLatest,
  put,
  call,
  select,
  delay,
  retry,
} from 'redux-saga/effects';
import jwtDecode from 'jwt-decode';
import OfflinePlugin from 'offline-plugin/runtime';

import { GET, POST_ONLY } from 'utils/fetch';
import { loggedIn, token, refreshToken } from 'utils/auth';
import {
  setProjects,
  setActiveProject,
  setOrganisation,
  setPermissions,
  networkError,
} from './actions';

import {
  LOG_ERROR,
  SET_ACTIVE_PROJECT,
  UPDATE_CONFIRMATION_SUCCESS,
  SEND_FEEDBACK_REQUEST,
} from './constants';

import makeSelectApp, { makeSelectProjects } from './selectors';

const { localStorage } = global.window;

/**
 * Effect to get users organisation
 */
export function* getOrganisation() {
  const organisation = yield GET('/organisation?status=eq.1');
  yield put(setOrganisation(organisation.body[0]));
}

/**
 * Effect to get users project
 */
export function* getProjects() {
  const projects = yield GET('/project?status=eq.1');
  yield put(setProjects(projects.body));
  yield put(setActiveProject(projects.body[0].id));

}

/**
 *
 */
export function* postFeedback(action) {
  try {
    const state = yield select(s => s);
    const feedback = action.feedback;
    const project_id = state.app.projectActive;
    const status = 1;
    yield call(POST_ONLY, '/feedback', { project_id, status, feedback, state });
  } catch (error) {
    console.error(action);
  }
}

// Individual exports for testing
export default function* root() {

  yield takeEvery(SEND_FEEDBACK_REQUEST, postFeedback);
}
