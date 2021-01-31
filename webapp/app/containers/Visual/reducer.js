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
    length: 5,
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
