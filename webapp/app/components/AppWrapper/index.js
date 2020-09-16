/**
 *
 * AppWrapper
 *
 * Center the content of the app
 *
 */

import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    padding-top: 48px;
    padding-left: 0;
    right: 0;
    bottom: 0;
    -webkit-transition: padding 150ms cubic-bezier(0.694, 0.0482, 0.335, 1);
    transition: padding 150ms cubic-bezier(0.694, 0.0482, 0.335, 1);
    display: flex;
    flex-flow: column nowrap;
    z-index: 5;

    @media only screen and (min-width: 768px){
      padding-left: 48px;
    }

    > div {
      width: 100%
    }
`;

function AppWrapper({ children }) {
  return <Wrapper id="app-wrapper">{ children }</Wrapper>;
}


export default AppWrapper;
