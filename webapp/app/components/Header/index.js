/**
 *
 * Header
 *
 * Main top component for the Header. Two other main components
 * of the Header are the HeaderUserMenu and HeaderSpacesMenu.
 *
 */

import React, { Fragment, useRef } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import HeaderDrawer from 'components/HeaderDrawer';

import {
  EuiHeader,
  EuiHeaderSection,
  EuiHeaderSectionItem,
  EuiHeaderBreadcrumbs,
  EuiHeaderSectionItemButton,
  EuiHeaderLinks,
  EuiHeaderLink,
  EuiIcon,
  EuiShowFor,
  EuiText,
} from '@elastic/eui';

import logo from './sarria.svg';


import { createStructuredSelector } from 'reselect';
import { useSelector, useDispatch } from 'react-redux';
import makeSelectLogin from 'containers/Login/selectors';

const FixedEuiHeader = styled(EuiHeader)`
  position: fixed;
  top: 0;
  width: 100%;
`;


export default function Header({
  app,
  breadcrumbs,
  menu,
  onChangeProject,
  onLogOut,
}){

  const navDrawerRef = useRef(null);
  const {
    organisation,
    projectActive,
    projects,
    user
  } = app;

  const stateSelector = createStructuredSelector({
    login: makeSelectLogin(),
  });

  const { login } = useSelector(stateSelector);


    return(
      <Fragment>
        <FixedEuiHeader>
          <EuiHeaderSection grow={false}>
            <EuiShowFor sizes={['xs', 's']}>
              <EuiHeaderSectionItem border="right">
                <EuiHeaderSectionItemButton
                  aria-label="Open nav"
                  onClick={() => navDrawerRef.current.toggleOpen()}>
                  <EuiIcon type="apps" href="#" size="m" />
                </EuiHeaderSectionItemButton>
              </EuiHeaderSectionItem>
            </EuiShowFor>
            <EuiHeaderSectionItem border="right">
              <Link to="/" className="euiHeaderLogo">
                <EuiIcon
                  type={logo}
                  aria-label="Goes to home"
                  className="euiHeaderLogo__icon" size="l"
                />
              </Link>
            </EuiHeaderSectionItem>
            <EuiHeaderSectionItem border="right">
            </EuiHeaderSectionItem>
          </EuiHeaderSection>
          <EuiHeaderBreadcrumbs
            max={5}
            showMaxPopover
            breadcrumbs={breadcrumbs}
            truncate={false} />
          <EuiHeaderSection side="right">
            <EuiHeaderSectionItem>
            <EuiHeaderLinks aria-label="App navigation links example">
              <EuiHeaderLink iconType="user">
               { login.logged ? (
                  <EuiText><p>{login.name}</p></EuiText>
                ) : (undefined)
                }</EuiHeaderLink>
            </EuiHeaderLinks>
           
            </EuiHeaderSectionItem>
            <EuiHeaderSectionItem>
            { ' ' }
            </EuiHeaderSectionItem>
          </EuiHeaderSection>
        </FixedEuiHeader>
        <HeaderDrawer menu={menu} navDrawerRef={navDrawerRef} />
      </Fragment>
    )
};

Header.propTypes = {
  app: PropTypes.object,
  menu: PropTypes.array,
  breadcrumbs: PropTypes.array,
  onChangeProject: PropTypes.func,
  onLogOut: PropTypes.func,
};
