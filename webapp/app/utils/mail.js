/**
 *
 * Helpers to send mails
 *
 */

import { POST } from 'utils/fetch';
import { call } from 'redux-saga/effects';

export function* sendMail(subject, message, template) {
  yield call(
    POST,
    '/messages',
    { subject, message, template },
    {
      Prefer: 'return=representation',
    },
  );
}
