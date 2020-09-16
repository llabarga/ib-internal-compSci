/**
 *
 * FeedbackButton
 *
 */

import React, {useState} from 'react';
import { useDispatch } from 'react-redux';

import {
  EuiButton,
  EuiButtonIcon,
  EuiForm,
  EuiFormRow,
  EuiPopover,
  EuiPopoverTitle,
  EuiTextArea,
} from '@elastic/eui';

import { sendFeedbackRequest } from 'containers/App/actions';

function FeedbackButton(props) {

  const [isFeedbackPopoverOpen, setFeedbackPopoverOpen] = useState(false);
  const [feedback, onFeedBackChange] = useState('');
  const dispatch = useDispatch();

  const feedbackButton = (
    <EuiButtonIcon
      iconSize="l"
      color="warning"
      onClick={() => setFeedbackPopoverOpen(!isFeedbackPopoverOpen)}
      iconType="iInCircle"
      aria-label="Feedback about this task."
    />);

  return (
    <EuiPopover
      {...props}
      ownFocus
      button={feedbackButton}
      isOpen={isFeedbackPopoverOpen}
      closePopover={() => setFeedbackPopoverOpen(false)}>
      <EuiPopoverTitle>Write your feedback.</EuiPopoverTitle>
      <EuiForm>
        <EuiFormRow>
          <EuiTextArea
            style={{ minWidth: '300px' }}
            placeholder="I have noticed that ..."
            aria-label="Use this text area to report any problem or feedback"
            value={feedback}
            onChange={e => onFeedBackChange(e.target.value)}
            onKeyDown={e => e.stopPropagation()}
          />
        </EuiFormRow>
        <EuiFormRow>
          <EuiButton
            size="s"
            onClick={() => {
              dispatch(sendFeedbackRequest(feedback));
              setFeedbackPopoverOpen(false);
              onFeedBackChange('');
            }}
          >
            Send
          </EuiButton>
        </EuiFormRow>
      </EuiForm>
    </EuiPopover>
  );
}

export default FeedbackButton;
