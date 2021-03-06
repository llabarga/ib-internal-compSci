/*
 * NotFoundPage Messages
 *
 * This contains all the text for the NotFoundPage container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.NotFoundPage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Welcome to the POMIDOR timer app.',
  },
  body: {
    id: `${scope}.body`,
    defaultMessage: 'This is a development for the IB Computer Science'
  },
  back: {
    id: `${scope}.back`,
    defaultMessage: 'Login'
  }
});
