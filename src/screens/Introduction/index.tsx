import React from 'react';

import Logo from '../../assets/images/Logo.svg';
import { Button } from '../../components/Button';
import { Container, Subtitle, Title } from './styles';

export const Introduction = (): JSX.Element => (
  <Container>
    <Logo width={135} height={146} />
    <Title>Financ</Title>
    <Subtitle>Money manager</Subtitle>

    <Button text="Get Started Now" type="secondary" />
  </Container>
);
