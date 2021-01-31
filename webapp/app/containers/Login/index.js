/**
 *
 * Login
 *
 */

import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import Page from 'components/Page';
import m from './messages';
import "./Login.css";
import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiFormRow,
  EuiButton,
  EuiFieldText,
  EuiTitle,
  EuiFlyout,
  EuiFlyoutBody,
  EuiFlyoutFooter,
  EuiSpacer,
  EuiForm,
  EuiTextArea,
  EuiDescriptionListTitle,
  EuiDescriptionListDescription,
  EuiDescriptionList,
  EuiFlyoutHeader,
  EuiText,
  EuiButtonEmpty,

} from '@elastic/eui';


 export function Login() {

  const [isFlyoutVisible, setIsFlyoutVisible] = useState(false);

  const [value, setValue] = useState('');

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const closeFlyout = () => setIsFlyoutVisible(false);

  const showFlyout = () => setIsFlyoutVisible(true);

  

  let flyout;
   if (isFlyoutVisible) {
     flyout = (
       <EuiFlyout
         onClose={closeFlyout}
         size="s"
         aria-labelledby="flyoutSmallTitle">
         <EuiFlyoutHeader hasBorder>
           <EuiTitle size="s">
             <h2 id="flyoutSmallTitle"> Create user</h2>
           </EuiTitle>
         </EuiFlyoutHeader>
         <EuiFlyoutBody>

      <EuiText>
         <p>
           In small flyouts, it is ok to reduce the header size to{' '}
           <code>s</code>.
         </p>
       </EuiText>

               <EuiFieldText
                 placeholder="Placeholder text"
                 value={value}
                 onChange={(e) => onChange(e)}
                 aria-label="Use aria labels when no actual label is in use"
               />
         </EuiFlyoutBody>
         </EuiFlyout>

     );
   }

   return (
     <Page>
       <EuiTitle size="s"><h1>Login Page</h1></EuiTitle>

        <EuiFlexGroup style={{ maxWidth: 1000 }}>
    <EuiFlexItem>
      <EuiFormRow label="User Name" helpText="Please enter your username or e-mail">
        <EuiFieldText />
      </EuiFormRow>
    </EuiFlexItem>
    <EuiFlexItem>
      <EuiFormRow label="Password">
        <EuiFieldText />
      </EuiFormRow>
    </EuiFlexItem>
    <EuiFlexItem grow={false}>
      <EuiFormRow hasEmptyLabelSpace>
        <EuiButton> Login </EuiButton>
      </EuiFormRow>
    </EuiFlexItem>
  </EuiFlexGroup>

      <div>
        <EuiButton onClick={showFlyout}> First time?</EuiButton>

        {flyout}

      </div>




  </Page>
          );
      }

 Login.propTypes = {};

 export default Login;
