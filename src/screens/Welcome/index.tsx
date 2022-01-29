import React from 'react';

import { OnboardSlide } from '../../components/OnboardSlide';
import { Container } from './styles';

const img = require('../../assets/images/welcome.png');

export const Welcome = (): JSX.Element => (
  <Container>
    <OnboardSlide
      title="Welcome"
      text="Stay on top by effortlessly tracking your subscriptions & bills"
      path={img}
      onDone={(): void => {}}
      textColor="light"
    />
  </Container>
);
