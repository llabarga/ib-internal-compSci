/**
 *
 * TimerTable
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import {
  EuiBasicTable,
  EuiButtonGroup,
  EuiCallOut,
  EuiLink,
  EuiSpacer,
} from '@elastic/eui';

import { FormattedMessage } from 'react-intl';
import m from './messages';

const timers =[
  {
    id:1,
    name: 'Prueba 1',
    subject: 'Castellano',
    level: 'NM',
    length: 120,
    readingTime: false
  },

  {
    id:2,
    name: 'Prueba 2',
    subject: 'Biología',
    level: 'NS',
    length: 60,
    readingTime: false
  },

  {
    id:3,
    name: 'Prueba 2',
    subject: 'English',
    level: 'NS',
    length: 120,
    readingTime: true
  }
];

const columns = [
  {
    field: 'name',
    name: 'Examen',
    sortable: true,
  },
  {
    field: 'subject',
    name: 'Asignatura',
  },
  {
    field: 'length',
    name: 'Duración',
    sortable: true,
  },
];

function TimerTable({items, onRowEdit, onRowClone, onRowDelete}) {

  console.log(items);
  return (
    <>
    <div>
      <FormattedMessage {...m.header} />
    </div>
    <EuiBasicTable
      items={items}
      columns={columns}
    />
    </>
  );
}

TimerTable.propTypes = {};

export default memo(TimerTable);
