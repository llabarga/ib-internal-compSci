/*
 *
 * Admin reducer
 *
 */

import produce from 'immer';
import {  
  CHANGE_FORM_NAME,
  CHANGE_FORM_SUBJECT,
  CHANGE_FORM_LEVEL,
  CHANGE_FORM_REFILL,
  RESET_FORM,
  LOAD_EXAMS_SUCCESS,
  LOAD_EXAMS_ERROR,
  EXAM_CLONE,
  EXAM_SAVE,
  EXAM_CREATE_SUCCESS,
  EXAM_CREATE_ERROR,
  EXAM_UPDATE_SUCCESS,
  EXAM_UPDATE_ERROR,
  EXAM_DELETE,
  EXAM_DELETE_SUCCESS,
  EXAM_DELETE_ERROR,
} from './constants';

export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const adminReducer = produce((draft, action) => {
  switch (action.type) {
    case DEFAULT_ACTION:
      break;
  }
}, initialState);

export default adminReducer;
