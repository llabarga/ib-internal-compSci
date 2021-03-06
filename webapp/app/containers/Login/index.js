/**
 *
 * Login
 *
 */

import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import Page from 'components/Page';
import m from './messages';
import history from 'utils/history';

import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

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
  EuiFieldPassword,
  EuiIcon,
  EuiFlexGrid,
} from '@elastic/eui';

import {
    changeLoginUserName,
    changeLoginPassword,
    changeRegisterName,
    changeRegisterEmail,
    changeRegisterPass,
    changeRegisterPassConfirm,
    doLogin,
} from "./actions";

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectLogin from './selectors';
import reducer from './reducer';
import saga from './saga';
const stateSelector = createStructuredSelector({
  login: makeSelectLogin(),
});


export function Login() {

  useInjectReducer({ key: 'login', reducer });
  useInjectSaga({ key: 'login', saga });

  /* eslint-disable no-unused-vars */
  const { login } = useSelector(stateSelector);
  const dispatch = useDispatch();
  /* eslint-enable no-unused-vars */

  const [isFlyoutVisible, setIsFlyoutVisible] = useState(false);

  const [logged, setLogged] = useState(false);

  const onChange = (e) => {
    setValue(e.target.value);
  };


  const register = () =>{
    closeFlyout();
    dispatch(doLogin());
  }
  
  const closeFlyout = () => setIsFlyoutVisible(false);

  const showFlyout = () => setIsFlyoutVisible(true);

  
  const handleLogin = () => {
    console.log('doLogin');
    dispatch(doLogin());
  }
  
  const failedForm = false;
  const errors = [];

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
          <EuiFlexItem>
          <EuiTitle>
            <h2>¿Aún no te has registrado?</h2>
          </EuiTitle>
          <EuiSpacer />
          <EuiForm component="form" onSubmit={handleLogin}>
            <EuiFormRow label="Nombre">
              <EuiFieldText
                placeholder="Nombre"
                value={login.reg_name}
                prepend={<EuiIcon type="user" />}
                onChange={evt =>
                        dispatch(changeRegisterName(evt.target.value))
                }
                aria-label="Nombre"
              />
            </EuiFormRow>
            <EuiFormRow label="Email">
              <EuiFieldText
                placeholder="Email"
                value={login.reg_email}
                prepend={<EuiIcon type="email" />}
                onChange={evt =>
                        dispatch(changeRegisterEmail(evt.target.value))}
                aria-label="Email"
              />
            </EuiFormRow>
            <EuiFormRow label="Contraseña">
              <EuiFieldPassword
                placeholder="Contraseña"
                value={login.reg_pass}
                onChange={evt =>
                        dispatch(changeRegisterPass(evt.target.value))}
                aria-label="Contraseña"
              />
            </EuiFormRow>
            <EuiFormRow label="Confirmar contraseña">
              <EuiFieldPassword
                placeholder="Confirmar contraseña"
                value={login.reg_pass_confirm}
                onChange={evt =>
                        dispatch(changeRegisterPassConfirm(evt.target.value))}
                aria-label="Confirmar contraseña"
              />
            </EuiFormRow>

            <EuiSpacer />

            <EuiFlexGrid columns={2}>
              <EuiFlexItem>
                <EuiButton type="submit" fill>
                  Crea tu cuenta
                </EuiButton>
              </EuiFlexItem>

            </EuiFlexGrid>
          </EuiForm>
        </EuiFlexItem>
         </EuiFlyoutBody>
         </EuiFlyout>

     );
   }

   return (
     <Page header="Login" restrictWidth={800}>
      <EuiForm isInvalid={failedForm} error={errors}>
        <EuiFormRow label="Email">
          <EuiFieldText
            name="email"
            placeholder="email@salessianssarria.com"
            onChange={(evt) => dispatch(changeLoginUserName(evt.target.value))}
            value={login.user}
          />
        </EuiFormRow>
        <EuiFormRow label="Password">
          <EuiFieldPassword
            name="password"
            onChange={(evt) => dispatch(changeLoginPassword(evt.target.value))}
            onKeyPress={(event) =>
              event.key === 'Enter' ? dispatch(loginRequest()) : null
            }
            value={login.password}
          />
        </EuiFormRow>
        <EuiSpacer size="m" />
        <EuiButton
          onClick={handleLogin}
          fill
        >
          <FormattedMessage {...m.submit} />
        </EuiButton>
        <EuiButtonEmpty
          onClick={showFlyout}
          size="xs"
        >
          Create an account
        </EuiButtonEmpty>
      </EuiForm>
      {flyout}
    </Page>
    );
}

 Login.propTypes = {};

 export default Login;