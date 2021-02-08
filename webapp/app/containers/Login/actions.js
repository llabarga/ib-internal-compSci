/*
 *
 * Login actions
 *
 */

import { LOGIN,
         LOGIN_SUCCESS,
         LOGIN_ERROR } from "./constants";

export function doLogin() {
  return {
    type: LOGIN, 
  };
}

export function loginSuccess(user) {
  return {
    type: LOGIN_SUCCESS, user
  };
}
