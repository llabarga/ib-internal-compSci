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
  EuiDatePicker,
  EuiFilePicker,
} from '@elastic/eui';


import {
  changeFormSubject,
  changeFormName,
  changeFormLevel,
  changeFormDesc,
  changeFormDate,
  changeFormDuration,
  examClone,
  examSave,
  examDelete,
  refill,
  resetForm,
  loadItems,
  loadFile,
  loadExams,
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

  
  useEffect(() => {
    dispatch(loadExams());
  }, []);

  
  /* eslint-disable no-unused-vars */
  const { admin } = useSelector(stateSelector);
  const dispatch = useDispatch();
  /* eslint-enable no-unused-vars */

  const [isOpen, setOpen] = useState(false);
  const [isOpenFiles, setOpenFiles] = useState(false);
  const [files, setFiles] = useState({});

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
    dispatch(examSave());
  };

  const onCreate = () => {
    setOpen(true);
    // This resets the form
    dispatch(resetForm());
  };

  const onRowEdit = item => {
    setOpen(!isOpen);
    dispatch(refill(item.id));
  };

  const onRowDelete = item => {
    dispatch(examDelete(item));
  };

  const onLoadFile = () => {
    dispatch(loadItems());
    setOpenFiles(false);
  }

  const [checked] = useState(false);

  const onChange = (e) => {
    setChecked(e.target.checked);
  };

  const csvJSON = (csv) => {

    var lines=csv.split("\n");

    var result = [];

    // NOTE: If your columns contain commas in their values, you'll need
    // to deal with those before doing the next step 
    // (you might convert them to &&& or something, then covert them back later)
    // jsfiddle showing the issue https://jsfiddle.net/
    var headers=lines[0].split(",");

    for(var i=1;i<lines.length;i++){

        var obj = {};
        var currentline=lines[i].split(",");

        for(var j=0;j<headers.length;j++){
            obj[headers[j].replace(/^["'](.+(?=["']$))["']$/, '$1')] = currentline[j].replace(/^["'](.+(?=["']$))["']$/, '$1');
        }

        result.push(obj);

    }

    return result; //JavaScript object
    //return JSON.stringify(result); //JSON

  }


  const loadFiles = (files)=>  {
    var file = files[0];
    var reader = new FileReader();
    reader.onload = function(event) {
      // The file's text will be printed here

      console.log(csvJSON(event.target.result))
      dispatch(loadFile(csvJSON(event.target.result)));
    };

    reader.readAsText(file);
  }

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

          <EuiButton
            onClick={() => setOpenFiles(true)}
            iconType="listAdd"
            size="s"
            style={{ marginRight: '10px' }}
          >
            Upload file
          </EuiButton>
        </div>
      </EuiFlexItem>

        <EuiFlexItem>
          <TimerTable
            items={admin.items}
            onRowEdit={onRowEdit}
            onRowDelete={onRowDelete}
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
                  <EuiFormRow label="Exam subject" helpText="Exam subject.">
                    <EuiFieldText
                      name="name"
                      placeholder="Subject"
                      onChange={evt =>
                        dispatch(changeFormSubject(evt.target.value))
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
                        options={[
                          { value: 'option_one', text: 'High level' },
                          { value: 'option_two', text: 'Standard level' },
                        ]}
                        onChange={evt => dispatch(changeFormLevel(evt.target.value))}
                        value={admin.level}
                      />

                    </EuiFormRow>
                                  
                </EuiFlexItem>
                <EuiFlexItem grow={false}>
                  <EuiFormRow label="Exam date" helpText="Exam date.">
                      <EuiDatePicker selected={admin.fecha}                       
                      onChange={evt => dispatch(changeFormDate(evt))
                      } />
                  </EuiFormRow>
                </EuiFlexItem>
                <EuiFlexItem grow={false}>
                  <EuiFormRow label="Exam duration" helpText="Exam duration.">
                      <EuiFieldNumber
                        placeholder="Time in minutes"
                        value={admin.duration}
                         onChange={evt =>
                          dispatch(changeFormDuration(evt.target.value))
                          }
                        aria-label="Use aria labels when no actual label is in use"
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

       {isOpenFiles ? (
        <EuiFlyout
          onClose={() => setOpenFiles(false)}
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
                  <EuiFormRow label="Exam list" helpText="Exam list.">
                   <EuiFilePicker
                    id="asdf2"
                    initialPromptText="Select or drag and drop a file with exams"
                    onChange={(files) => {
                      loadFiles(files);
                    }}
                    aria-label="Use aria labels when no actual label is in use"
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
                  onClick={() => setOpenFiles(false)}
                  flush="left"
                >
                  Close
                </EuiButtonEmpty>
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <EuiButton onClick={onLoadFile} fill>
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
