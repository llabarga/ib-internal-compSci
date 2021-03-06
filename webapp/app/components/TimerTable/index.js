/**
 *
 * TimerTable
 *
 */

import React, { memo, useState } from 'react';
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

// const onRowEdit = (t) => {console.log(t)}; 
// const onRowClone = (t) => {console.log(t)}; 
// const onRowDelete = (t) => {console.log(t)}; 

// const timers =[
//   {
//     id:1,
//     name: 'Prueba 1',
//     subject: 'Castellano',
//     level: 'NM',
//     length: 120,
//     readingTime: false
//   },

//   {
//     id:2,
//     name: 'Prueba 2',
//     subject: 'Biología',
//     level: 'NS',
//     length: 60,
//     readingTime: false
//   },

//   {
//     id:3,
//     name: 'Prueba 2',
//     subject: 'English',
//     level: 'NS',
//     length: 120,
//     readingTime: true
//   }
// ];


function TimerTable({items, onRowEdit, onRowClone, onRowDelete}) {

  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(5);
  const [showPerPageOptions, setShowPerPageOptions] = useState(true);

  const onTableChange = ({ page = {} }) => {
    const { index: pageIndex, size: pageSize } = page;

    setPageIndex(pageIndex);
    setPageSize(pageSize);
  };

  console.log(items);
  
  const totalItemCount = items.length;

  const pagination = {
    pageIndex,
    pageSize,
    totalItemCount,
    pageSizeOptions: [3, 5, 8],
    hidePerPageOptions: !showPerPageOptions,
  };

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
      field: 'duration',
      name: 'Duración',
      sortable: true,
    },
      {
        name: 'Actions',
        width: '20%',
        actions: [
          {
            id: 'edit',
            name: 'Edit',
            description: 'Edit this exam',
            icon: 'pencil',
            type: 'icon',
            isPrimary: true,
            onClick: onRowEdit,
          },
          {
            id: 'delete',
            name: 'Delete',
            description: 'Delete this exam',
            icon: 'trash',
            type: 'icon',
            color: 'danger',
            onClick: onRowDelete,
          },
        ],
      },
  ];

  return (
    <>
    <div>
      <FormattedMessage {...m.header} />
    </div>
    <EuiBasicTable
      items={items.slice(pageIndex*pageSize, pageIndex*pageSize+pageSize)}
      columns={columns}
      pagination={pagination}
      onChange={onTableChange}
    />
    </>
  );
}

TimerTable.propTypes = {};

export default memo(TimerTable);
