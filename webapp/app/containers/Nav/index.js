/**
 *
 * Nav
 *
 * This component manages the state for the application
 * Header and NavDrawer. All the dispatches and information
 * gathering should be done here and pushed down to the components.
 *
 */

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';

import history from 'utils/history';
import { titleCase } from 'utils/helpers';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import Header from 'components/Header';
import makeSelectApp, { makeSelectLocation } from '../App/selectors';

import { setActiveProject } from '../App/actions';
import m from './messages';

const stateSelector = createStructuredSelector({
  app: makeSelectApp(),
  location: makeSelectLocation(),
});

const splitUrl = (url, opts) => {
  // options
  opts = opts || {};
  // A default home path,
  opts.home = opts.home || <FormattedMessage {...m.home} />;
  opts.endingSlash = opts.endingSlash || false;
  opts.beautify =
    opts.beautify ||
    function(s) {
      return s.replace(/[-_]/g, ' ');
    };

  // extract url path (without querystring and without hash)
  const urlPath = url.split(/[?#]/)[0];
  // split segments by slash and filter empty elements
  const segments = urlPath.split('/').filter(Boolean);
  // add first element for `home` element
  segments.unshift('');

  // enhance segments array
  return segments.map(function(crumb, i, arr) {
    // join the segments array up to the actual element with slash
    let p = arr.slice(0, i + 1).join('/');
    if (opts.endingSlash) {
      // the last element must get the ending slash back, if it was there originally (lost during split)
      // every higher path segment must get an ending slash.
      if (i < arr.length - 1 || urlPath.endsWith('/')) p += '/';
    } else {
      // the first element must always be a slash
      if (i == 0) p = '/';
    }
    // the first element must get the `home` name, every other element must be uri decoded
    crumb = i == 0 ? opts.home : titleCase(decodeURIComponent(crumb).replace(/_/g, " "));
    return {
      text: crumb,
      onClick: () => history.push(p),
    };
  });
}

export function Nav() {
  // NOTE: This injectors make the reducers and sagas effect from the Login
  // container available in order to handle the LOGOUT action. The reducers are
  // dynamically loaded, so if the user has reloaded the page after the login
  // the login reducers are not loaded.


  const { app, location } = useSelector(stateSelector);
  const dispatch = useDispatch();

  // Given the location
  const breadCrumbs = () => splitUrl(location.pathname);


  const internalApps = [
    {
      label: 'ETL',
      iconType: 'training',
    },
    {
      label: 'Concept mapping',
      onClick: () => history.push('/Internal/ConceptMapper'),
      iconType: 'indexMapping',
    },
  ];

  const settings = [
    {
      label: 'Settings',
      iconType: 'gear',
      flyoutMenu: {
        title: 'Settings',
        listItems: [
          {
            label: 'User Settings',
            onClick: () => history.push('/Settings'),
            iconType: 'gear',
          },
          {
            label: 'Organisation setting',
            href: '/#/layout/nav-drawer',
            iconType: 'wrench',
            isDisabled: true,
          },
        ],
      },
    },

  ];

  const timers = [
    {
      label: 'Timers',
      iconType: 'clock',
      onClick: () => history.push('/Admin'),
    },
  ];

  const timerCards = [
    {
      label: 'Cards',
      iconType: 'tableDensityExpanded',
      onClick: () => history.push('/Visual'),
    },
  ];


  const menu = [settings, timers, timerCards];

  return (
    <Header
      app={app}
      breadcrumbs={breadCrumbs()}
      menu={menu}
      onLogOut={() => dispatch(logout())}
    />
  );
}

Nav.propTypes = {};

export default Nav;
