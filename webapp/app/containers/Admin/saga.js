import {
  put,
  call,
  all,
  takeLatest,
  takeLeading,
  select,
} from 'redux-saga/effects';

//import {todosRef} from '../../utils/firebase'
// Individual exports for testing

import {
  EXAM_SAVE,
  EXAM_SAVE_SUCCESS,
  EXAM_DELETE,
  LOAD_ITEMS,
} from './constants';

import {
  examCreateSuccess,  
  examDeleteSuccess,
  examUpdateSuccess,
  examUpdateError,
  examCreateError,
  examDeleteError,
  resetForm,
  loadItemsSuccess,
} from './actions';

import makeSelectAdmin from './selectors';

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

/*
 * Creates a cohort in the database
 */
export function* createTimer(timer) {
  try {

    // const resp = yield call(
    //   POST,
    //   '/cohort',
    //   {
    //     project_id: projectActive,
    //     status: 1,
    //     created_at: moment(),
    //     name: newCohort.name,
    //     display_name: newCohort.display_name,
    //     description: newCohort.description,
    //   },
    //   extraHeaders);

    // if (resp.status === 201 && resp.body.length === 1) {
    //   yield call(
    //     POST,
    //     '/criteria_cohort',
    //     criteria.map(c => ({
    //       project_id: projectActive,
    //       criteria_id: c.id,
    //       cohort_id: resp.body[0].id,
    //       assignment_date: moment(),
    //       criteria_type: c.inclusion,
    //     })),
    //     extraHeaders,
    //   );

    if (true) {
      yield put(examCreateSuccess({ ...timer, id: uuidv4() }));
    } else {
      throw new Error(resp.body.message);
    }
  } catch (error) {
    console.log(error);
    yield put(examCreateError(error.message));
  }
}

export function* updateTimer(timer) {
  try {
    // const { criteria, ...updatedCohort } = cohort;
    // const selectedCohort = yield select(makeSelectorSelectedCohort());
    // const { projectActive } = yield select(makeSelectProjectActive());
    // const extraHeaders = {
    //   Prefer: 'resolution=merge-duplicates,return=representation',
    // };
    // const resp = yield call(PATCH, '/cohort', updatedCohort, extraHeaders);
    // if (resp.status === 204) {
    //   //  define a list of the IDs before and after the update
    //   const oldIds = selectedCohort.criteria.map(x => x.id);
    //   const newIds = criteria.map(x => x.id);
    //   //  define a list of criteria_cohorts that need to be removed from the DB
    //   const criteriaToDelete = selectedCohort.criteria.filter(
    //     x => !newIds.includes(x.id),
    //   );
    //   //  define a list of criteria_cohorts that need to be added/updated in the database
    //   const criteriaToPost = criteria.filter(
    //     x =>
    //       !oldIds.includes(x.id) ||
    //       selectedCohort.criteria.find(c => c.id === x.id).inclusion !==
    //         x.inclusion,
    //   );

    //   const allCalls = criteriaToDelete
    //     .map(c =>
    //       call(
    //         DELETE_ONLY,
    //         `/criteria_cohort?cohort_id=eq.${selectedCohort.id}&criteria_id=eq.${c.id}`,
    //       ),
    //     )
    //     .concat(
    //       call(
    //         POST,
    //         '/criteria_cohort',
    //         criteriaToPost.map(c => ({
    //           project_id: projectActive,
    //           criteria_id: c.id,
    //           cohort_id: selectedCohort.id,
    //           assignment_date: moment(),
    //           criteria_type: c.inclusion,
    //         })),
    //         extraHeaders,
    //       ),
    //     );

    //   yield all(allCalls);

    if (true) {

      yield put(examUpdateSuccess(timer));
    } else {
      throw new Error(resp.body.message);
    }
  } catch (error) {
    yield put(examUpdateError(error.message));
  }
}


/*
 * Creates or updates a new cohort
 */
export function* examSaveFlow() {
  const { name, description, subject, level, duration, fecha, currentlyEditing } = yield select(
    makeSelectAdmin(),
  );

  const now = new Date();

  let timer = {
    name,
    subject,
    description,
    level,
    duration,
    fecha
  };

  if (currentlyEditing) {
    const id = { id: currentlyEditing };
    timer = { ...timer, ...id, updated_at: now.toISOString() };
    console.log('Updating ...')
    yield updateTimer(timer);
  } else {
    yield createTimer(timer);
  }
  yield put(resetForm());
}

/*
 * Creates or updates a new cohort
 */
export function* examDeleteFlow(action) {
  try {
    // const extraHeaders = {
    //   Prefer: 'resolution=merge-duplicates,return=representation',
    // };
    // const resp = yield call(PATCH, '/cohort', cohort, extraHeaders);
    // if (resp.status === 204) {
    if (true) {
      yield put(
        examDeleteSuccess(action.item.id, {
          title: `Exam ${action.item.id} succesfully deleted.`,
        }),
      );
    } else {
      throw new Error(resp.body.message);
    }
  } catch (error) {
    console.log(error);
    yield put(examDeleteError(error.message));
  }
}


export function* loadItemsFlow() {

    const { newItems } = yield select(
      makeSelectAdmin(),
    );
    yield put(loadItemsSuccess(newItems));
  
}

export default function* adminSaga() {
  // See example in containers/HomePage/saga.js

  yield takeLatest(EXAM_SAVE, examSaveFlow);
  yield takeLeading(EXAM_DELETE, examDeleteFlow);
  yield takeLatest(LOAD_ITEMS, loadItemsFlow);

//   const FETCH_TODOS = 'FETCH_TODOS';export const addToDo = newToDo => async dispatch => {
//   todosRef.push().set(newToDo);
// };export const completeToDo = completeToDo => async dispatch => {
//   todosRef.child(completeToDo).remove();
// };export const fetchToDos = () => async dispatch => {
//   todosRef.on("value", snapshot => {
//     dispatch({
//       type: FETCH_TODOS,
//       payload: snapshot.val()
//     });
//   });
// };

}
