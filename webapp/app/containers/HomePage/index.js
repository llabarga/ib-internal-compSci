/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { memo, useEffect, useState } from 'react';
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

import { createStructuredSelector } from 'reselect';
import { useSelector, useDispatch } from 'react-redux';
import makeSelectLogin from '../Login/selectors';
import history from 'utils/history';



export function HomePage() {

  const stateSelector = createStructuredSelector({
    login: makeSelectLogin(),
  });

  const { login } = useSelector(stateSelector);

  useEffect(() => {

    
    // if (!login.logged) history.push('/Login');

  });

  return (
    <Page title={<FormattedMessage {...m.pageName} />}>
      <EuiFlexGroup>
        <EuiFlexItem>
          <EuiDescriptionList>
            <EuiDescriptionListTitle>
            Welcome to Pomidor!
            </EuiDescriptionListTitle>
            <EuiDescriptionListDescription>

            </EuiDescriptionListDescription>
          </EuiDescriptionList>
        </EuiFlexItem>
      </EuiFlexGroup>
      <EuiFlexGroup>
        <EuiFlexItem>
              Use the menu to navigate through the app.
              Try creating a new timer in Admin and take a look
              in Visual.
        </EuiFlexItem>
      </EuiFlexGroup>
    </Page>
  );
}

HomePage.propTypes = {};

export default HomePage;
