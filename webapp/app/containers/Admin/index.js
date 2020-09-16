/**
 *
 * Admin
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  EuiDescriptionListTitle,
  EuiDescriptionListDescription,
  EuiDescriptionList,
  EuiFlexGroup,
  EuiFlexItem,
} from '@elastic/eui';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectAdmin from './selectors';
import reducer from './reducer';
import saga from './saga';
import m from './messages';
import Page from 'components/Page';
import TimerTable from 'components/TimerTable'
const stateSelector = createStructuredSelector({
  admin: makeSelectAdmin(),
});

function Admin() {
  useInjectReducer({ key: 'admin', reducer });
  useInjectSaga({ key: 'admin', saga });

  /* eslint-disable no-unused-vars */
  const { admin } = useSelector(stateSelector);
  const dispatch = useDispatch();
  /* eslint-enable no-unused-vars */

  return (
    <div>
      <Helmet>
        <title>Admin</title>
        <meta name="description" content="Description of Admin" />
      </Helmet>
     <Page title="Administration">
      <>
      <EuiFlexGroup>
        <EuiFlexItem>
          <EuiDescriptionList>
            <EuiDescriptionListTitle>
              Timers
            </EuiDescriptionListTitle>
            <EuiDescriptionListDescription>
              List of timers
            </EuiDescriptionListDescription>
          </EuiDescriptionList>
        </EuiFlexItem>

      </EuiFlexGroup>
    <TimerTable />
      </>
     </Page>
    </div>
  );
}

Admin.propTypes = {};

export default memo(Admin);
