import React from 'react';
import styled from 'styled-components';
import trip from '../assets/travel-world.gif';

const Column = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  min-height: 100%;
  justify-content: space-around;
`;

const SolidText = styled.p`
  margin: 0;
  font-size: 40px;
  font-family: sans-serif;
`;
const CurvyText = styled.p`
  margin: 0;
  font-size: 32px;
  font-style: italic;
`;
const BigCurvyText = CurvyText.extend`
  margin: 0;
  font-size: 50px;
`;
const Fade = styled.span`
  color: #938a8a;
`;

const format = (n, precision) =>
  n.toLocaleString(undefined, { maximumFractionDigits: precision });

const Figure = ({ n, unit, precision = 0 }) => (
  <SolidText>
    {format(n, precision)} <Fade>{unit}</Fade>
  </SolidText>
);
const Or = () => (
  <CurvyText>
    <Fade>ou...</Fade>
  </CurvyText>
);

const Main = ({ seconds }) => {
  const minutes = seconds / 60;
  const hours = minutes / 60;
  const days = hours / 24;
  const weeks = days / 7;
  const months = days / 30;

  return (
    <Column>
      <img src={trip} alt="loading..." />
      <CurvyText>Faltam</CurvyText>
      <Figure n={seconds} unit="s" />
      <Or />
      <Figure n={minutes} unit="min" />
      <Or />
      <Figure n={hours} unit="horas" />
      <Or />
      <Figure n={days} unit="dias" />
      <Or />
      <Figure n={weeks} unit="semanas" precision={2} />
      <Or />
      <Figure n={months} unit="meses" precision={2} />
      <BigCurvyText>Para voltar para o Brasil!</BigCurvyText>
    </Column>
  );
};

export default Main;
