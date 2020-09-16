/*
 *
 * App actions
 *
 * Global actions. ONLY actions that will be fired from multiple routes should
 * be located here.
 *
 */
import {
  LOG_ERROR,
  NETWORK_ERROR,
  SET_ACTIVE_PROJECT,
  SET_AUTH,
  SET_ORG,
  SET_PROJECTS,
  PUSH_PROJECT,
  SET_USER,
  SET_PERMISSIONS,
  SEND_FEEDBACK_REQUEST,
  UPDATE_CONFIRMATION_SUCCESS,
  UPDATE_CONFIRMATION_REQUEST,
  UPDATE_CONFIRMATION_ERROR,
} from './constants';

/**
 * Make the application aware of a network error
 * @param  {string} error, the error stack
 */
export function networkError(error) {
  return { type: NETWORK_ERROR, error };
}

/**
 * Make the request to the user to update the application
 */
export function updateConfirmationRequest() {
  return { type: UPDATE_CONFIRMATION_REQUEST };
}

/**
 * Update the service-worker upon user request
 */
export function updateConfirmationSuccess() {
  return { type: UPDATE_CONFIRMATION_SUCCESS };
}

/**
 * Raise an error while updating the service worker
 * @param  {string} error, the error stack
 */
export function updateConfirmationError(error) {
  return { type: UPDATE_CONFIRMATION_ERROR, error };
}

/**
 * Set the permissions for a user
 * @param  {object} permissions, the permissions in the project for the user
 */
export function setPermissions(permissions) {
  return { type: SET_PERMISSIONS, permissions };
}

/**
 * Log all the frontend errors
 * @param  {object} error, the error and trace
 */
export function logError(error) {
  return { type: LOG_ERROR, error };
}

/**
 * Sets the active project
 * @param  {boolean} projectActive, the project to activate
 */
export function setActiveProject(projectActive) {
  return { type: SET_ACTIVE_PROJECT, projectActive };
}

/**
 * Sets the authentication state of the application
 * @param  {boolean} newAuthState True means a user is logged in, false means no user is logged in
 */
export function setAuthState(loggedIn) {
  return { type: SET_AUTH, loggedIn };
}

/**
 * Sets the organisation
 * @param  {object} Organisation information
 */
export function setOrganisation(organisation) {
  return { type: SET_ORG, organisation };
}

/**
 * Sets all the projects for that user
 * @param  {boolean} newAuthState True means a user is logged in, false means no user is logged in
 */
export function setProjects(projects) {
  return { type: SET_PROJECTS, projects };
}

/**
 * Adds a project to the project list
 * @param  {object} project The project data
 */
export function pushProject(project) {
  return { type: PUSH_PROJECT, project };
}

/**
 * Sets the `user` state from the server
 */
export function setUser(user) {
  return { type: SET_USER, user };
}

/**
 * Sends a user feedback to the database
 */
export function sendFeedbackRequest(feedback) {
  return { type: SEND_FEEDBACK_REQUEST, feedback}
}
