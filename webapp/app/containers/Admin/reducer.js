/*
 *
 * Admin reducer
 *
 */
import moment from 'moment';
import produce from 'immer';
import {
  CHANGE_FORM_NAME,
  CHANGE_FORM_SUBJECT,
  CHANGE_FORM_LEVEL,
  CHANGE_FORM_REFILL,
  CHANGE_FORM_DESC,
  CHANGE_FORM_DATE,
  CHANGE_FORM_DURATION,
  CHANGE_FORM_LOAD,
  LOAD_ITEMS_SUCCESS,
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

export const initialState = {
  name: 'Prueba',
  subject: 'Maths',
  description: 'Maths',
  level: 'NS',
  duration: 60,
  readingTime: false,
  fecha: moment(),
  newItems: [],
  items: [
    {
    id:1,
    name: 'Prueba 1',
    description: 'Lengua B',
    subject: 'Lengua B',
    level: 'NM',
    duration: 75,
    readingTime: false,
    icon:'logoCloud',
  },

  {
    id:2,
    name: 'Prueba 2',
    description: 'Lengua B',
    subject: 'Lengua B',
    level: 'NS',
    duration: 10,
    readingTime: true,
    icon:'logoKibana',
  },
],

};

/* eslint-disable default-case, no-param-reassign */
const adminReducer = produce((draft, action) => {
  console.log(action.type);
  switch (action.type) {
    case LOAD_EXAMS_SUCCESS:
      draft.items = action.examList;
      draft.loading = false;
      return;
    case LOAD_EXAMS_ERROR:
      draft.loading = false;
      draft.message = 'No exams match search criteria';
      return;
    case EXAM_CREATE_SUCCESS:
      console.log(action.exam);
      draft.currentlyEditing = '';
      draft.items.push(action.exam);
      return;
    case EXAM_UPDATE_SUCCESS:
      draft.items = draft.items.map(item => {
        // Find the item with the matching id
        if (item.id === draft.currentlyEditing) {
          // Return a new object
          return {
            ...action.exam,
          };
        }
        // Leave every other item unchanged
        return item;
      });
      return;
    case EXAM_DELETE_SUCCESS:
      draft.items.splice(
        draft.items.findIndex(c => c.id === action.id),
        1,
      );
      return;
    case CHANGE_FORM_NAME:
      draft.name = action.name;
      return;
    case CHANGE_FORM_SUBJECT:
      draft.subject = action.subject;
      return;
    case CHANGE_FORM_DESC:
      draft.description = action.description;
      return;      
    case CHANGE_FORM_DURATION:
      draft.duration = action.duration;
      return;
    case CHANGE_FORM_DATE:
      draft.fecha = action.fecha;
      return;
    case CHANGE_FORM_LEVEL:
      draft.level = action.level;
      return;
    case CHANGE_FORM_LOAD:
      draft.newItems = action.newItems;
      return;      
    case LOAD_ITEMS_SUCCESS:
      draft.items = [...draft.items, ...action.newItems];
      draft.newItems = []
      return;     
    case CHANGE_FORM_REFILL:
      const item = draft.items.find(it => it.id === action.itemId);
      draft.currentlyEditing = item.id;
      draft.name = item.name;
      draft.subject = item.subject;
      draft.level = item.level;
      draft.duration = item.duration;
      draft.description = item.description;
      return;
    case RESET_FORM:
      draft.currentlyEditing = initialState.currentlyEditing;
      draft.name = initialState.name;
      draft.subject = initialState.subject;
      draft.level = initialState.level;
      draft.duration = initialState.duration;
      draft.description = initialState.description;
      return;
    case EXAM_UPDATE_SUCCESS:
      return;
  }
}, initialState);

export default adminReducer;
