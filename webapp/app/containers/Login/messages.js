/*
 * Login Messages
 *
 * This contains all the text for the Login container.
 */

import { defineMessages } from "react-intl";

export const scope = "app.containers.Login";

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: "This is the Login container!",
  },
  submit: {
    id: `${scope}.submit`,
    defaultMessage: 'Login',
  },
  description: {
    id: `${scope}.description`,
    defaultMessage: 'Login to IOMEDs platform, AppMed',
  },
});
