/**
 *
 * Page
 *
 * Componont wrapper for the pages.
 *
 */

import React from 'react';
import { useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentHeader,
  EuiPageContentHeaderSection,
  EuiPageContentBody,
  EuiTitle,
  EuiSpacer,
  EuiHideFor
} from '@elastic/eui';

import FeedbackButton from 'components/FeedbackButton';
import HelpButton from 'components/HelpButton';

function Page(props) {

  const passThrough = { ...props};
  delete passThrough.showFeedback;
  delete passThrough.help;

  return (
    <EuiPage restrictWidth { ...passThrough } >
      <EuiPageBody>
          { props.title || props.showFeedback || props.help ? (
            <EuiPageContentHeader responsive={false}>
              <EuiPageContentHeaderSection>
                <EuiHideFor sizes={['xs', 's', 'm']}>
                  { props.title ?
                     <EuiTitle>
                       <h3>{ props.title }</h3>
                     </EuiTitle>
                    : null }
                </EuiHideFor>
              </EuiPageContentHeaderSection>
              { props.showFeedback || props.help? (
                <EuiPageContentHeaderSection>
                  { props.showFeedback ? <FeedbackButton /> : null }
                  { props.help ?<HelpButton help={props.help} /> : null }
                </EuiPageContentHeaderSection>
              ) : null}
            </EuiPageContentHeader>
          ): null }
        <EuiSpacer size="m" />
        <EuiPageContent>
        { props.header ? (
          <EuiPageContentHeader>
            <EuiPageContentHeaderSection>
              <EuiTitle>
                <h3>{ props.header }</h3>
              </EuiTitle>
            </EuiPageContentHeaderSection>
          </EuiPageContentHeader>
        ): null }
          <EuiPageContentBody>
            { props.children }
          </EuiPageContentBody>
        </EuiPageContent>
      </EuiPageBody>
    </EuiPage>
    );
}

Page.propTypes = {};
Page.defaultProps = {
  showFeedback: false,
};
export default Page;
