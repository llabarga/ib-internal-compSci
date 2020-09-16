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
    defaultMessage: 'The page you\'re looking for was not found.',
  },
  body: {
    id: `${scope}.body`,
    defaultMessage: 'Seems like you are lost, if you think this is an error, please contact our team. Thanks'
  },
  back: {
    id: `${scope}.back`,
    defaultMessage: 'Go back'
  }
});
