/*
 *
 * Login actions
 *
 */

import { 
           CHANGE_LOGIN_USERNAME,
           CHANGE_LOGIN_PASSWORD,
           CHANGE_REGISTER_NAME,
           CHANGE_REGISTER_EMAIL,
           CHANGE_REGISTER_PASSWORD,
           CHANGE_REGISTER_CONFIRM_PASSWORD,
         LOGIN,
         LOGIN_SUCCESS,
         LOGIN_ERROR } from "./constants";


 export function changeLoginUserName(username) {
   return { type: CHANGE_LOGIN_USERNAME, username };
 }

 export function changeLoginPassword(password) {
   return { type: CHANGE_LOGIN_PASWORD, password };
 }

 export function changeRegisterName(name) {
   return { type: CHANGE_REGISTER_NAME, name };
 }

 export function changeResisterEmail(email) {
   return { type: CHANGE_REGISTER_EMAIL, email };
 }

 export function changeRegisterPass(password) {
   return { type: CHANGE_REGISTER_PASSWORD, name };
 }

 export function changeRegisterPassConfirm(password) {
   return { type: CHANGE_REGISTER_CONFIRM_PASSWORD, password };
 }

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
