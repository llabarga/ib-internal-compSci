import { takeLatest, put } from 'redux-saga/effects';
import { EuiFlexGroup, EuiFlexItem, EuiButton } from '@elastic/eui';

import { addToast } from './actions';
import {
  SET_ACTIVE_PROJECT,
  NETWORK_ERROR,
  UPDATE_CONFIRMATION_REQUEST,
  SEND_FEEDBACK_REQUEST,
} from 'containers/App/constants';


/*
 * Create a toast template with a unique ID
 */

export function createToast({
  title = '',
  text = '',
  color = '',
  iconType = '',
  children = null,
}) {
  const randLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
  const uid = randLetter + Date.now();

  let defaultIconType;
  if (!iconType) {
    switch (color) {
      case 'success':
        defaultIconType = 'check';
        break;
      case 'warning':
        defaultIconType = 'alert';
        break;
      case 'danger':
        defaultIconType = 'alert';
        break;
      default:
        break;
    }
  }

  return {
    id: uid,
    title,
    text,
    color,
    iconType: iconType || defaultIconType,
    children,
  };
}

/*
 * Capture all the ADD_TOAST and check
 */
/* eslint-disable default-case */
export function* toastFlow(action) {
  let title;
  let text;
  let children;

  if (action.toast) {
    text = action.toast.text;
    title = action.toast.title;
  }

  // switch (action.type) {
  //   case TASK_ANNOTATION_ERROR:
  //     title = 'Error creating the annotation';
  //     text = action.error;
  //     yield put(addToast(createToast({ title, text, color: 'danger' })));
  //     break;
  //
  // }
}

// Individual exports for testing
export default function* root() {
  // yield takeLatest(CREATE_PROJECT_SUCCESS, toastFlow);

}
