/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import {
  EuiDescriptionListTitle,
  EuiDescriptionListDescription,
  EuiDescriptionList,
  EuiFlexGroup,
  EuiFlexItem,
} from '@elastic/eui';

import Page from 'components/Page';
import m from './messages';

export function HomePage() {
  return (
    <Page title={<FormattedMessage {...m.pageName} />}>
      <EuiFlexGroup>
        <EuiFlexItem>
          <EuiDescriptionList>
            <EuiDescriptionListTitle>
              <FormattedMessage {...m.help} />
            </EuiDescriptionListTitle>
            <EuiDescriptionListDescription>
              <FormattedMessage {...m.helpInfo} />
            </EuiDescriptionListDescription>
          </EuiDescriptionList>
        </EuiFlexItem>
      </EuiFlexGroup>
      <EuiFlexGroup>
        <EuiFlexItem>

              Hola me llamo leyre

        </EuiFlexItem>
      </EuiFlexGroup>
    </Page>
  );
}

HomePage.propTypes = {};

export default HomePage;
