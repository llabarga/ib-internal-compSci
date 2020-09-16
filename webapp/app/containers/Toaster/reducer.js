/*
 *
 * Toaster reducer
 *
 */

import produce from 'immer';
import {
  ADD_TOAST,
  DELETE_TOAST,
  DELETE_ALL_TOAST
} from './constants';

export const initialState = {
  toasts: []
};

/* eslint-disable default-case, no-param-reassign */
const toasterReducer = produce((draft, action) => {
  switch (action.type) {
    case ADD_TOAST:
      draft.toasts.push(action.toast);
      return;
    case DELETE_TOAST:
      draft.toasts.splice(draft.toasts.findIndex(t => t.id === action.toast.id), 1);
      return;
    case DELETE_ALL_TOAST:
      return [];
  }
}, initialState);

export default toasterReducer;
