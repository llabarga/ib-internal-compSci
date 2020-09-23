/**
 *
 * TimerCard
 *
 */

import React, {useEffect, useState}  from "react";
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from "react-intl";
import m from "./messages";

import {
  EuiCard,
  EuiIcon,
  EuiFlexGroup,
  EuiFlexGrid,
  EuiFlexItem,
  EuiButton,
  EuiButtonGroup,
} from '@elastic/eui';

import { htmlIdGenerator } from '@elastic/eui/lib/services';

const idPrefix3 = htmlIdGenerator()();

const toggleButtonsIcons = [
  {
    id: `${idPrefix3}0`,
    label: 'Align left',
    iconType: 'refresh',
  },
  {
    id: `${idPrefix3}1`,
    label: 'Align center',
    iconType: 'play',
  },
  {
    id: `${idPrefix3}2`,
    label: 'Align right',
    iconType: 'pause',
  },
];



function TimerCard({item}) {


  const [toggleIconIdSelected, setToggleIconIdSelected] = useState(
    `${idPrefix3}0`
  );

  const [timeLeft, setTimeLeft] = useState(item.length);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (started) setTimeLeft(timeLeft-1);
    }, 1000);
  });


  const onChangeIcons = optionId => {

    switch (optionId) {
    case `${idPrefix3}0`:
      //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor1
      setStarted(false);
      setTimeLeft(item.length);
      break;
    case `${idPrefix3}1`:
      //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor2
      setStarted(true);
      break;
    case `${idPrefix3}2`:
      //Declaraciones ejecutadas cuando el resultado de expresión coincide con valorN
        setStarted(false);
  }
    setToggleIconIdSelected(optionId);
  };

  return (
    <>
    <EuiCard
     icon={<EuiIcon size="xxl" type={`logo${item.icon}`} />}
     title={item.name}
     isDisabled={item.icon === 'Kibana' ? true : false}
     description={item.subject + "  "+ timeLeft + " minutos " + item.level}
     onClick={() => window.alert('Timeout')}
    />
    <EuiButtonGroup
      legend="Text align"
      name="textAlign"
      options={toggleButtonsIcons}
      idSelected={toggleIconIdSelected}
      onChange={id => onChangeIcons(id)}
      isIconOnly
    />
    </>
  );

}

TimerCard.propTypes = {};

export default TimerCard;
