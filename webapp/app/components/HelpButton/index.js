/**
 *
 * HelpButton
 *
 */

import React, {useState} from 'react';

import {
  EuiButtonIcon,
  EuiPopover,
  EuiPopoverTitle,
} from '@elastic/eui';


function HelpButton(props) {

  const [isHelpPopoverOpen, setHelpPopoverOpen] = useState(false);

  const helpButton = (
    <EuiButtonIcon
      iconSize="l"
      color="primary"
      onClick={() => setHelpPopoverOpen(!isHelpPopoverOpen)}
      iconType="questionInCircle"
      aria-label="Help about this task."
    />);

  return (
    <EuiPopover
      {...props}
      ownFocus
      button={helpButton}
      isOpen={isHelpPopoverOpen}
      closePopover={() => setHelpPopoverOpen(false)}
    >
      <EuiPopoverTitle>Help</EuiPopoverTitle>
      {props.help}
    </EuiPopover>
  );
}

export default HelpButton;
