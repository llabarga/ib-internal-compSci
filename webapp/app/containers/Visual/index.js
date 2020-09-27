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

  const icons = ['Beats', 'Cloud', 'Logging', 'Kibana'];

  const timers =[
    {
    id:1,
    name: 'Prueba 1',
    subject: 'Lengua B',
    level: 'NM',
    length: 75,
    readingTime: false,
    icon:'Cloud',
  },

  {
    id:2,
    name: 'Prueba 2',
    subject: 'Lengua B',
    level: 'NS',
    length: 60,
    readingTime: true,
    icon:'Kibana',
  },

  {
    id:3,
    name: 'Prueba 1',
    subject: 'Biología',
    level: 'NS/NM',
    length: 45,
    readingTime: false,
    icon:'Cloud',
  },

  {
    id:4,
    name: 'Prueba 2',
    subject: 'Biología',
    level: 'NS/NM',
    length: 75,
    readingTime: false,
    icon:'Cloud',
  },

  {
    id:5,
    name: 'Prueba 1',
    subject: 'Física',
    level: 'NS/NM',
    length: 45,
    readingTime: false,
    icon:'Cloud',
  },

  {
    id:6,
    name: 'Prueba 2',
    subject: 'Física',
    level: 'NS/NM',
    length: 75,
    readingTime: false,
    icon:'Cloud',
  },

  {
    id:7,
    name: 'Prueba 1',
    subject: 'Filosofía',
    level: 'NS/NM',
    length: 60,
    readingTime: false,
    icon:'Cloud',
  },

  {
    id:8,
    name: 'Prueba 2',
    subject: 'Filosofía',
    level: 'NS/NM',
    length: 60,
    readingTime: false,
    icon:'Cloud',
  },

  {
    id:9,
    name: 'Prueba 3',
    subject: 'Filosofía',
    level: 'NS/NM',
    length: 75,
    readingTime: false,
    icon:'Cloud',
  },

  {
    id:10,
    name: 'Prueba 1',
    subject: 'Historia',
    level: 'NS/NM',
    length: 60,
    readingTime: false,
    icon:'Cloud',
  },

  {
    id:11,
    name: 'Prueba 2',
    subject: 'Historia',
    level: 'NS/NM',
    length: 45,
    readingTime: false,
    icon:'Cloud',
  },

  {
    id:12,
    name: 'Prueba 1',
    subject: 'Matemáticas',
    level: 'NS/NM',
    length: 90,
    readingTime: false,
    icon:'Cloud',
  },

  {
    id:13,
    name: 'Prueba 2',
    subject: 'Matemáticas',
    level: 'NS/NM',
    length: 90,
    readingTime: false,
    icon:'Cloud',
  },

  {
    id:14,
    name: 'Prueba 3',
    subject: 'Matemáticas',
    level: 'NS',
    length: 60,
    readingTime: false,
    icon:'Cloud',
  },


  {
    id:15,
    name: 'Prueba 1',
    subject: 'Computer Science',
    level: 'NM',
    length: 90,
    readingTime: false,
    icon:'Cloud',
  },

  {
    id:16,
    name: 'Prueba 3',
    subject: 'Computer Science',
    level: 'NS',
    length: 60,
    readingTime: false,
    icon:'Cloud',
  },

  {
    id:17,
    name: 'Prueba 1',
    subject: 'Gestión Empresarial',
    level: 'NM',
    length: 75,
    readingTime: false,
    icon:'Cloud',
  },

  {
    id:18,
    name: 'Prueba 2',
    subject: 'Gestión Empresarial',
    level: 'NM',
    length: 75,
    readingTime: false,
    icon:'Cloud',
  },

  {
    id:19,
    name: 'Prueba 1',
    subject: 'Química',
    level: 'NS/NM',
    length: 45,
    readingTime: false,
    icon:'Cloud',
  },

  {
    id:20,
    name: 'Prueba 2',
    subject: 'Química',
    level: 'NS/NM',
    length: 75,
    readingTime: false,
    icon:'Cloud',
  },

  {
    id:21,
    name: 'Prueba 1',
    subject: 'Lengua A',
    level: 'NM',
    length: 90,
    readingTime: false,
    icon:'Cloud',
  },
  ];

  const ITEM_STYLE = { width: '300px' };

  const cardNodes = timers.map(function(item, index) {
  return (
    <EuiFlexItem key={index} style={ITEM_STYLE}>
    <EuiCard
     icon={<EuiIcon size="xxl" type={`logo${item.icon}`} />}
     title={item.subject}
     isDisabled={item.icon === 'Kibana' ? true : false}
     description={item.name + item.level+ item.length + " minutos " }
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

       </>


     </Page>
  );
}

Visual.propTypes = {};

export default Visual;
