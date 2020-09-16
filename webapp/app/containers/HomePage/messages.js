/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.HomePage';

export default defineMessages({
  pageName: {
    id: `${scope}.pageName`,
    defaultMessage: 'Home',
  },
  description: {
    id: `${scope}.description`,
    defaultMessage: 'AppMed home page.',
  },
  new: {
    id: `${scope}.new`,
    defaultMessage: 'New Projects',
  },
  newInfo: {
    id: `${scope}.newInfo`,
    defaultMessage: `To start a project, contact: {link}`,
  },
  help: {
    id: `${scope}.help`,
    defaultMessage: 'Help',
  },
  helpInfo: {
    id: `${scope}.helpInfo`,
    defaultMessage:
      'Click on the left menu to access the desired app. Use the menu on the top bar to change the project you are working on.',
  },
});
