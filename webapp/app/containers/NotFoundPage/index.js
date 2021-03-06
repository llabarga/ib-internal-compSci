/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 */

import React, { Fragment } from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Page from 'components/Page'
import history from 'utils/history';

import {
  EuiEmptyPrompt,
  EuiButton
} from '@elastic/eui';

export default () => (
  <Page restrictWidth={500}>
    <EuiEmptyPrompt
      iconType="visGauge"
      title={<FormattedMessage {...messages.header} />}
      body={
        <Fragment>
          <p>
            <FormattedMessage {...messages.body} />
          </p>
        </Fragment>
      }
      actions={
        <EuiButton
          color="primary"
          onClick={()=> history.push('/')}
          fill
        >
          <FormattedMessage {...messages.back} />
        </EuiButton>
      }
    />
  </Page>
);
