import React from 'react';

import { Container, Text } from './styles';
import { ButtonProps } from './types';

export const Button = ({ text }: ButtonProps): JSX.Element => (
  <Container>
    <Text>{text}</Text>
  </Container>
);
