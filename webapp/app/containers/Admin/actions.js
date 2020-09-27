Exam/*
 *
 * Admin actions
 *
 */


 import {
   CHANGE_FORM_NAME,
   CHANGE_FORM_SUBJECT,
   CHANGE_FORM_LEVEL,
   CHANGE_FORM_REFILL,
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


 /**
  * Sets the exam table
  * @param  {Object} examList is the list of exams
  */
 export function loadExamsSuccess(examList) {
   return { type: LOAD_EXAMS_SUCCESS, examList };
 }

 /**
  * Manages errors retrieving from database
  * @param  {string} error is the error message
  */
 export function loadExamsError(error) {
   return { type: LOAD_EXAMS_ERROR, error };
 }

 /**
  * Sets the form state
  * @param  {string} name the new text of the email input field of the form
  */
 export function changeFormName(name) {
   return { type: CHANGE_FORM_NAME, name };
 }

 /**
  * Sets the form state
  * @param  {string} description the new text of the email input field of the form
  */
 export function changeFormDesc(description) {
   return { type: CHANGE_FORM_DESC, description };
 }

 /**
  * Sets the form state
  * @param  {string} description the new text of the email input field of the form
  */
 export function changeFormTargetPopulation(target) {
   return { type: CHANGE_FORM_TARGET, target };
 }

 /**
  * Sets the data back into the form
  * @param  {int} represent the exam id
  */
 export function refill(itemId) {
   return { type: CHANGE_FORM_REFILL, itemId };
 }

 /**
  * Resets the form
  */
 export function resetForm() {
   return { type: RESET_FORM };
 }

 /**
  * Sets a new exam in the table
  * @param  {Object} represent a new exam with all the data
  */
 export function examSave() {
   return { type: EXAM_SAVE };
 }

 /**
  * Sets a new exam in the table
  * @param  {Object} represent a new exam with all the data
  */
 export function examCreateSuccess(exam, toast) {
   return { type: EXAM_CREATE_SUCCESS, exam, toast };
 }

 /**
  * Manages errors updating or deleting the database
  * @param  {Object} represent a new exam with all the data
  */
 export function examCreateError(msg) {
   return { type: EXAM_CREATE_ERROR, msg, toast: { text: msg } };
 }

 /**
  * Updates a exam in the table
  * @param  {Object} represents a new exam with all the data
  */
 export function examUpdateSuccess(exam, toast) {
   return { type: EXAM_UPDATE_SUCCESS, exam, toast };
 }

 export function examUpdateError(msg) {
   return { type: EXAM_UPDATE_ERROR, msg, toast: { text: msg } };
 }

 /**
  * Clones an existing exam
  * @param  {Object} represents a exam
  */
 export function examClone(item) {
   return { type: EXAM_CLONE, item };
 }

 /**
  * Deletes a exam from database
  * @param  {Object} represents  a exam
  */
 export function examDelete(item) {
   return { type: EXAM_DELETE, item };
 }

 /**
  * Deletes a exam from the table
  * @param  {Object} is the exam id
  */
 export function examDeleteSuccess(id, toast) {
   return { type: EXAM_DELETE_SUCCESS, id, toast };
 }

 export function examDeleteError(msg) {
   return { type: EXAM_DELETE_ERROR, msg, toast: { text: msg } };
 }
