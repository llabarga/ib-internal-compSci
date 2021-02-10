/**
 *
 * TimerCard
 *
 */

import React, {useEffect, useState, useRef}  from "react";
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
  EuiTitle,
  EuiTextColor,
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

  const audio = useRef(null);
  const [toggleIconIdSelected, setToggleIconIdSelected] = useState(
    `${idPrefix3}0`
  );


  const randomIcon = () => {
    const icons = ['Kibana', 'Cloud', 'Maps', 'Observability',];
    return `logo${icons[Math.floor(Math.random() * icons.length)]}`;
  }

  const timeString = (seconds) => {
    var date = new Date(0);
    date.setSeconds(seconds);
    return date.toISOString().substr(11,8);
  }

  const [timer, setTimer] = useState();
  const [timeLeft, setTimeLeft] = useState(item.duration*60);
  const [started, setStarted] = useState(false);

  useEffect(() => {

    const t = setTimeout(() => {


      if (started & timeLeft>1) {
        setTimeLeft(timeLeft-1);

        if (timeLeft === 300) audio.current.play();
        if (timeLeft === 600) audio.current.play();

      }
      if (timeLeft === 1) {
        setStarted(false);
        setTimeLeft(0);
        audio.current.play();
        console.log('se acabo el tiempo');
        }
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
     title={item.subject+' - '+item.name+ ' '+ item.level}
     isDisabled={item.icon === 'Kibana' ? true : false}
     icon={<EuiIcon size="xl" type={randomIcon()} />}
     description={
      <>
      <EuiTitle>
        <h2>
          <EuiTextColor color="default">{timeString(timeLeft)} </EuiTextColor>

        </h2>
      </EuiTitle>

       <EuiButtonGroup
         legend="Text align"
         name="textAlign"
         options={toggleButtonsIcons}
         idSelected={toggleIconIdSelected}
         onChange={id => onChangeIcons(id)}
         isIconOnly
       />
     </>
     }

    />

    <audio ref={audio} id="beep" preload="auto" src="https://soundbible.com/grab.php?id=1746&type=mp3" />

    </>
  );

}

TimerCard.propTypes = {};

export default TimerCard;
