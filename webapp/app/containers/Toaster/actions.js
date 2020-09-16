/*
 *
 * Toaster actions
 *
 */

import {
  ADD_TOAST,
  DELETE_TOAST,
  DELETE_ALL_TOAST
} from './constants';


/**
 * Adds a new toast to the list
 * @param {Object} toast: new Object with this structure:
 * {
 *    title {node},
 *    color {string},
 *    iconType {enum, string, or element},
 *    content {node}
 * }
 */
export function addToast(toast){
  return {type: ADD_TOAST, toast};
}


/**
 * Removes a toast from the list
 * @param {int} id to a toast
 */
export function deleteToast(toast){
  return {type: DELETE_TOAST, toast};
}


/**
 * Removes all the toasts
 */
export function deleteAllToast(){
  return {type: DELETE_ALL_TOAST};
}
