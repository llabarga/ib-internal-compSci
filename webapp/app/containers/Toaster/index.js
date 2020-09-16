/**
 *
 * Toaster
 *
 * Toasts are short messages that appears on the lower right corner and time
 * out after a few seconds. Toasts are appropriate for short feedback related
 * to a user action. A toast should contain a message about a current action,
 * not a historical action.
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { EuiGlobalToastList } from '@elastic/eui';

import { useInjectReducer } from 'utils/injectReducer';
import makeSelectToaster from './selectors';
import reducer from './reducer';
import { deleteToast } from './actions';
import { useInjectSaga } from 'utils/injectSaga';
import saga from './saga';

const stateSelector = createStructuredSelector({
  toaster: makeSelectToaster(),
});


function Toaster() {
  useInjectReducer({ key: 'toaster', reducer });
  useInjectSaga({key: 'toaster', saga })

  const { toaster } = useSelector(stateSelector);
  const dispatch = useDispatch();

  return (
    <EuiGlobalToastList
      toasts={toaster.toasts}
      dismissToast={(removedToast) => dispatch(deleteToast(removedToast))}
      toastLifeTimeMs={6000}
    />
  );
}

Toaster.propTypes = {};

export default Toaster;
