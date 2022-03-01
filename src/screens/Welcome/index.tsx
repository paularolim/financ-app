import React from 'react';

import { useNavigation } from '@react-navigation/native';

import { OnboardSlide } from '../../components/OnboardSlide';
import { Container } from './styles';

const img = require('../../assets/images/welcome.png');

export const Welcome = (): JSX.Element => {
  const navigation = useNavigation();

  return (
    <Container>
      <OnboardSlide
        title="Welcome"
        text="Stay on top by effortlessly tracking your subscriptions & bills"
        path={img}
        onDone={(): void => navigation.navigate('Register')}
        textColor="light"
      />
    </Container>
  );
};
