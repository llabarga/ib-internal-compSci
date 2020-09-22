/**
 *
 * Visual
 *
 */

import React, {useEffect, useState} from 'react';
// import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  EuiCard,
  EuiIcon,
  EuiFlexGroup,
  EuiFlexGrid,
  EuiFlexItem,
  EuiButton,
} from '@elastic/eui';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectVisual from './selectors';
import reducer from './reducer';
import saga from './saga';
import m from './messages';
import Page from 'components/Page';
const stateSelector = createStructuredSelector({
  visual: makeSelectVisual(),
});

function Visual() {
  useInjectReducer({ key: 'visual', reducer });
  useInjectSaga({ key: 'visual', saga });

  /* eslint-disable no-unused-vars */
  const { visual } = useSelector(stateSelector);
  const dispatch = useDispatch();
  /* eslint-enable no-unused-vars */


  const timers = visual.timers.map((t) => ({'name': t.name, 'time': t.length}));
  const [timeLeft, setTimeLeft] = useState(timers);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(timeLeft.map((x)=>({...x, 'time': x.time-1})));
    }, 1000);
  });

  const icons = ['Beats', 'Cloud', 'Logging', 'Kibana'];

  const cardNodes = visual.timers.map(function(item, index) {
  return (
    <EuiFlexItem key={index}>
    <EuiCard
     icon={<EuiIcon size="xxl" type={`logo${item.icon}`} />}
     title={item.name}
     isDisabled={item.icon === 'Kibana' ? true : false}
     description={item.subject + "  "+timeLeft.find((x) => (x.name === item.name)).time + " minutos " + item.level}
     onClick={() => window.alert('Timeout')}
    />

    </EuiFlexItem>
    );
  });

  return (
     <Page title={<FormattedMessage {...m.header} />}>
       <>

       These are your timers!

       <EuiFlexGrid gutterSize="l" columns={2}>{cardNodes}</EuiFlexGrid>
       <EuiButton> Add </EuiButton>
       </>


     </Page>
  );
}

Visual.propTypes = {};

export default Visual;
