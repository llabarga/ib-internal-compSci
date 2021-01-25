/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { useDispatch } from 'react-redux';

import { useInjectSaga } from 'utils/injectSaga';
import HomePage from 'containers/HomePage/Loadable';
import Admin from 'containers/Admin/Loadable';
import Login from 'containers/Login/Loadable';
import Visual from 'containers/Visual/Loadable';
import Nav from 'containers/Nav';
import AppWrapper from 'components/AppWrapper';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Toaster from 'containers/Toaster/Loadable';
import { EuiWindowEvent } from '@elastic/eui';
import messages from './messages';
import saga from './saga';

import GlobalStyle from '../../global-styles';
import { logError } from './actions';

export function App() {
  useInjectSaga({ key: 'app', saga });

  const dispatch = useDispatch();

  return (
    <>
      <Helmet>
        <title>POMIDOR - Exam time tracking</title>
        <meta
          name="description"
          content={<FormattedMessage {...messages.header} />}
        />
      </Helmet>
      <Nav />
      <AppWrapper>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/Admin" component={Admin} />
          <Route path="/Visual" component={Visual} />
          <Route path="/Login" component={Login} />
          <Route component={NotFoundPage} />
        </Switch>
      </AppWrapper>
      <Toaster />
      <GlobalStyle />
      <EuiWindowEvent event="error" handler={(e) => dispatch(logError(e))} />
    </>
  );
}

App.propTypes = {};
export default App;
