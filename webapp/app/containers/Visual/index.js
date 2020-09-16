/**
 *
 * Visual
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  EuiCard,
  EuiIcon,
  EuiFlexGroup,
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

  const icons = ['Beats', 'Cloud', 'Logging', 'Kibana'];

  const timers =[
    {
      id:1,
      name: 'Prueba 1',
      subject: 'Castellano',
      level: 'NM',
      length: 120,
      readingTime: false,
      icon:'Cloud',
    },

    {
      id:2,
      name: 'Prueba 2',
      subject: 'Biología',
      level: 'NS',
      length: 60,
      readingTime: false,
      icon:'Cloud',
    },

    {
      id:3,
      name: 'Prueba 2',
      subject: 'English',
      level: 'NS',
      length: 120,
      readingTime: true,
      icon:'Kibana',
    }
  ];

  const cardNodes = timers.map(function(item, index) {
  return (
    <EuiFlexItem key={index}>
    <EuiCard
     icon={<EuiIcon size="xxl" type={`logo${item.icon}`} />}
     title={item.name}
     isDisabled={item.icon === 'Kibana' ? true : false}
     description={item.subject + "  "+item.length + " minutos " + item.level}
     onClick={() => window.alert('Timeout')}
    />

    </EuiFlexItem>
    );
  });

  return (
     <Page title={<FormattedMessage {...m.header} />}>
       <>

       These are your timers!

       <EuiFlexGroup gutterSize="l">{cardNodes}</EuiFlexGroup>
       <EuiButton> Add </EuiButton>
       </>


     </Page>
  );
}

Visual.propTypes = {};

export default Visual;
