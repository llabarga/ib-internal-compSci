/*
 *
 * Login reducer
 *
 */

import produce from "immer";
import { 
           CHANGE_LOGIN_USERNAME,
           CHANGE_LOGIN_PASSWORD,
           CHANGE_REGISTER_NAME,
           CHANGE_REGISTER_EMAIL,
           CHANGE_REGISTER_PASSWORD,
           CHANGE_REGISTER_CONFIRM_PASSWORD,
  LOGIN_SUCCESS,
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

    case CHANGE_LOGIN_USERNAME:
      draft.user = action.username;
      return;
    case CHANGE_LOGIN_PASSWORD:
      draft.password = action.password;
      return;
    case CHANGE_REGISTER_NAME:
      draft.reg_name = action.name;
      return;
    case CHANGE_REGISTER_EMAIL:
      draft.reg_email = action.email;
      return;
      return;
    case CHANGE_REGISTER_PASSWORD:
      draft.reg_pass = action.password;
      return;
    case CHANGE_REGISTER_CONFIRM_PASSWORD:
      draft.reg_pass_confirm = action.password;
      return;
    case LOGIN_SUCCESS:
      draft.logged = true;
      return;
    case LOGIN_ERROR:
      draft.error = true;
      return;
  }
}, initialState);

export default loginReducer;
