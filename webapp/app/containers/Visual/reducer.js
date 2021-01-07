/*
 *
 * Visual reducer
 *
 */

import produce from 'immer';
import { DEFAULT_ACTION } from './constants';

export const initialState = {

  timers: [
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
    length: 60,
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
const visualReducer = produce((draft, action) => {
  switch (action.type) {
    case DEFAULT_ACTION:
      break;
  }
}, initialState);

export default visualReducer;
