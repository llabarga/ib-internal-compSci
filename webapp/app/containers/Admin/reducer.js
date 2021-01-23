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
  description: 'Maths',
  level: 'option_one',
  duration: 60,
  fecha: moment(),
  items: [
    {
    id:1,
    name: 'Prueba 1',
    subject: 'Lengua B',
    level: 'NM',
    length: 75,
    readingTime: false,
    icon:'Cloud',
  },

  {
    id:2,
    name: 'Prueba 2',
    subject: 'Lengua B',
    level: 'NS',
    length: 10,
    readingTime: true,
    icon:'Kibana',
  },

  {
    id:3,
    name: 'Prueba 1',
    subject: 'Biología',
    level: 'NS/NM',
    length: 45,
    readingTime: false,
    icon:'Cloud',
  },

  {
    id:4,
    name: 'Prueba 2',
    subject: 'Biología',
    level: 'NS/NM',
    length: 75,
    readingTime: false,
    icon:'Cloud',
  },

  {
    id:5,
    name: 'Prueba 1',
    subject: 'Física',
    level: 'NS/NM',
    length: 45,
    readingTime: false,
    icon:'Cloud',
  },

  {
    id:6,
    name: 'Prueba 2',
    subject: 'Física',
    level: 'NS/NM',
    length: 75,
    readingTime: false,
    icon:'Cloud',
  },

  {
    id:7,
    name: 'Prueba 1',
    subject: 'Filosofía',
    level: 'NS/NM',
    length: 60,
    readingTime: false,
    icon:'Cloud',
  },

  {
    id:8,
    name: 'Prueba 2',
    subject: 'Filosofía',
    level: 'NS/NM',
    length: 60,
    readingTime: false,
    icon:'Cloud',
  },

  {
    id:9,
    name: 'Prueba 3',
    subject: 'Filosofía',
    level: 'NS/NM',
    length: 75,
    readingTime: false,
    icon:'Cloud',
  },

  {
    id:10,
    name: 'Prueba 1',
    subject: 'Historia',
    level: 'NS/NM',
    length: 60,
    readingTime: false,
    icon:'Cloud',
  },

  {
    id:11,
    name: 'Prueba 2',
    subject: 'Historia',
    level: 'NS/NM',
    length: 45,
    readingTime: false,
    icon:'Cloud',
  },

  {
    id:12,
    name: 'Prueba 1',
    subject: 'Matemáticas',
    level: 'NS/NM',
    length: 90,
    readingTime: false,
    icon:'Cloud',
  },

  {
    id:13,
    name: 'Prueba 2',
    subject: 'Matemáticas',
    level: 'NS/NM',
    length: 90,
    readingTime: false,
    icon:'Cloud',
  },

  {
    id:14,
    name: 'Prueba 3',
    subject: 'Matemáticas',
    level: 'NS',
    length: 60,
    readingTime: false,
    icon:'Cloud',
  },


  {
    id:15,
    name: 'Prueba 1',
    subject: 'Computer Science',
    level: 'NM',
    length: 90,
    readingTime: false,
    icon:'Cloud',
  },

  {
    id:16,
    name: 'Prueba 3',
    subject: 'Computer Science',
    level: 'NS',
    length: 60,
    readingTime: false,
    icon:'Cloud',
  },

  {
    id:17,
    name: 'Prueba 1',
    subject: 'Gestión Empresarial',
    level: 'NM',
    length: 75,
    readingTime: false,
    icon:'Cloud',
  },

  {
    id:18,
    name: 'Prueba 2',
    subject: 'Gestión Empresarial',
    level: 'NM',
    length: 75,
    readingTime: false,
    icon:'Cloud',
  },

  {
    id:19,
    name: 'Prueba 1',
    subject: 'Química',
    level: 'NS/NM',
    length: 45,
    readingTime: false,
    icon:'Cloud',
  },

  {
    id:20,
    name: 'Prueba 2',
    subject: 'Química',
    level: 'NS/NM',
    length: 75,
    readingTime: false,
    icon:'Cloud',
  },

  {
    id:21,
    name: 'Prueba 1',
    subject: 'Lengua A',
    level: 'NM',
    length: 90,
    readingTime: false,
    icon:'Cloud',
  },
],

};

/* eslint-disable default-case, no-param-reassign */
const adminReducer = produce((draft, action) => {
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
      draft.currentlyEditing = '';
      draft.items.push(action.exam);
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
    case CHANGE_FORM_REFILL:
      const item = draft.items.find(it => it.id === action.itemId);
      draft.currentlyEditing = item.id;
      draft.name = item.name;
      draft.subject = item.subject;
      draft.level = item.level;
      return;
    case RESET_FORM:
      draft.currentlyEditing = initialState.currentlyEditing;
      draft.name = initialState.name;
      draft.subject = initialState.subject;
      draft.level = initialState.level;
        return;
  }
}, initialState);

export default adminReducer;
