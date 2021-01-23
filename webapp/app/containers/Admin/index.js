/**
 *
 * Admin
 *
 */

import React, { memo, useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  EuiDescriptionListTitle,
  EuiDescriptionListDescription,
  EuiDescriptionList,
  EuiFlexGroup,
  EuiFlexItem,
  EuiFlyout,
  EuiFlyoutHeader,
  EuiFlyoutBody,
  EuiFlyoutFooter,
  EuiButton,
  EuiTitle,
  EuiText,
  EuiLink,
  EuiSpacer,
  EuiForm,
  EuiFormRow,
  EuiFieldText,
  EuiTextArea,
  EuiFieldNumber,
  EuiButtonEmpty,
  EuiCheckboxGroup,
  EuiSelect,
} from '@elastic/eui';


import {
  changeFormSubject,
  changeFormName,
  changeFormLevel,
  examClone,
  examSave,
  examDelete,
  refill,
  resetForm,
} from './actions';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectAdmin from './selectors';
import reducer from './reducer';
import saga from './saga';
import m from './messages';
import Page from 'components/Page';
import TimerTable from 'components/TimerTable'
const stateSelector = createStructuredSelector({
  admin: makeSelectAdmin(),
});

function Admin() {
  useInjectReducer({ key: 'admin', reducer });
  useInjectSaga({ key: 'admin', saga });

  /* eslint-disable no-unused-vars */
  const { admin } = useSelector(stateSelector);
  const dispatch = useDispatch();
  /* eslint-enable no-unused-vars */

  console.log(admin);

  const [isOpen, setOpen] = useState(false);

  const closeForm = () => {
    setOpen(false);
    //dispatch(resetForm());
  };
  const openForm = () => {
    setOpen(true);
    //dispatch(resetForm());
  };
  const onSave = () => {
    setOpen(false);
    //dispatch(resetForm());
  };

  const onCreate = () => {
    setOpen(true);
    // This resets the form
    dispatch(resetForm());
  };

  const [checked] = useState(false);

  const onChange = (e) => {
    setChecked(e.target.checked);
  };

  return (
    <div>
      <Helmet>
        <title>Admin</title>
        <meta name="description" content="Description of Admin" />
      </Helmet>
     <Page title="Administration">

      <EuiFlexGroup direction="column">
      <EuiFlexItem>
        <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
          <EuiButton
            onClick={openForm}
            iconType="listAdd"
            size="s"
            style={{ marginRight: '10px' }}
          >
            New timer
          </EuiButton>
        </div>
      </EuiFlexItem>

        <EuiFlexItem>
          <TimerTable
            items={admin.items}
            onRowEdit={openForm}
            onRowClone={openForm}
            onRowDelete={openForm}
          />
        </EuiFlexItem>
      </EuiFlexGroup>

      {isOpen ? (
        <EuiFlyout
          onClose={() => setOpen(false)}
          aria-labelledby="flyoutTitle"
          hideCloseButton
        >
          <EuiFlyoutHeader hasBorder>
            <EuiTitle size="m">
              <h2 id="flyoutTitle">Define timer</h2>
            </EuiTitle>
          </EuiFlyoutHeader>
          <EuiFlyoutBody>
            <EuiText>
              <p>Define the parameters for your timer</p>
            </EuiText>
            <EuiSpacer />
            <EuiForm>
              <EuiFlexGroup style={{ maxWidth: 600 }} direction="column">
                <EuiFlexItem grow={false}>
                  <EuiFormRow label="Exam name" helpText="Exam name.">
                    <EuiFieldText
                      name="name"
                      placeholder="Exam name"
                      onChange={evt =>
                        dispatch(changeFormName(evt.target.value))
                      }
                      value={admin.name}
                    />
                  </EuiFormRow>
                </EuiFlexItem>


                <EuiFlexItem grow={false}>
                  <EuiFormRow
                    label="Description"
                    helpText="A comprehensive description of your exam."
                  >
                    <EuiTextArea
                      name="description"
                      placeholder="A comprehensive description of your exam"
                      onChange={evt =>
                        dispatch(changeFormDesc(evt.target.value))
                      }
                      value={admin.subject}
                      />
                        </EuiFormRow>
                        </EuiFlexItem>
                        <EuiFlexItem grow={false}>

                        <EuiFormRow
                        label="Select level"
                          >
                            <EuiSelect
                              hasNoInitialSelection
                              options={[
                                { value: 'option_one', text: 'High level' },
                                { value: 'option_two', text: 'Standard level' },
                              ]}
                            />

                          </EuiFormRow>
                                  
                </EuiFlexItem>
              </EuiFlexGroup>
            </EuiForm>
          </EuiFlyoutBody>




          <EuiFlyoutFooter>
            <EuiFlexGroup justifyContent="spaceBetween">
              <EuiFlexItem grow={false}>
                <EuiButtonEmpty
                  iconType="cross"
                  onClick={closeForm}
                  flush="left"
                >
                  Close
                </EuiButtonEmpty>
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <EuiButton onClick={onSave} fill>
                  Save
                </EuiButton>
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiFlyoutFooter>
        </EuiFlyout>
      ) : (
        undefined
      )}
     </Page>
    </div>
  );
}

Admin.propTypes = {};

export default memo(Admin);
