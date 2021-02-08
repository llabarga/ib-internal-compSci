/*
 *
 * Login reducer
 *
 */

import produce from "immer";
import { LOGIN_SUCCESS,
         LOGIN_ERROR,
          } from "./constants";

export const initialState = {
    user: 'llabarga',
    pass: '12345',
    name: 'Leyre Labarga',
    logged: false,
    error: false
};

/* eslint-disable default-case, no-param-reassign */
const loginReducer = produce((draft, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      draft.logged = true;
      return;
    case LOGIN_ERROR:
      draft.error = true;
      return;
  }
}, initialState);

export default loginReducer;
