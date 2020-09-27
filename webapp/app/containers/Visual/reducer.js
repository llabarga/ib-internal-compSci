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
        subject: 'Castellano',
        level: 'NM',
        length: 120,
        readingTime: false,
        icon:'Cloud',
      },

      {
        id:2,
        name: 'Prueba 2',
        subject: 'Biología',
        level: 'NS',
        length: 60,
        readingTime: false,
        icon:'Cloud',
      },

      {
        id:3,
        name: 'Prueba 2',
        subject: 'English',
        level: 'NS',
        length: 120,
        readingTime: true,
        icon:'Kibana',
      }
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
