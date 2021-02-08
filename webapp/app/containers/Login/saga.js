import { take, takeLatest, call, put, select } from 'redux-saga/effects';


import { LOGIN,
         LOGIN_SUCCESS,
         LOGIN_ERROR } from "./constants";

import {
    loginSuccess,
    loginError,
} from "./actions";


import history from 'utils/history';

export function* go(loggedUser) {
  history.push('/Admin');
  yield put(loginSuccess(loggedUser));
}

export function* loginFlow() {
  const loggedUser = {
      'user': 'leyre',
  };

  yield go(loggedUser);

  // try {
  //   yield put(loginSuccess(loggedUser));
  // } catch {
  //   yield put(loginError(loggedUser));
  // }

}

// Individual exports for testing
export default function* loginSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(LOGIN, loginFlow);
}
