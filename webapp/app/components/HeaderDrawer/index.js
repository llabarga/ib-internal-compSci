/**
 *
 * HeaderDrawer
 *
 * The menu MUST be dynamic, as it changes depending in the project the user is
 * working on.
 */

import React from 'react';
import PropTypes from 'prop-types';
import {
  EuiNavDrawerGroup,
  EuiNavDrawer,
  EuiHorizontalRule,
} from '@elastic/eui';


export default function HeaderDrawer({
  menu,
  navDrawerRef
}){

  // Create a NavDrawerGroup for each item
  const navGroups = menu.map(
    (item, i) => <EuiNavDrawerGroup listItems={item} key={`navGroup${i}`}/>
  );
  // Add an HorizontalRule between the NavDrawerGroup items
  // except for the last group of the icons
  const menuSpaced = navGroups.reduce((acc, item, i) =>
    [...acc, item, <EuiHorizontalRule margin="none" key={`spacer${i}`} />],
  []).slice(0,-1);

  return(
    <EuiNavDrawer ref={navDrawerRef}>
      { menuSpaced }
    </EuiNavDrawer>
  );
};

HeaderDrawer.propTypes = {
  menu: PropTypes.array
}
