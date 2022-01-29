import React from 'react';

import { Container, Text } from './styles';
import { ButtonProps } from './types';

export const Button = ({
  text,
  type = 'primary',
  shape = 'square',
  onPress,
}: ButtonProps): JSX.Element => (
  <Container type={type} shape={shape} onPress={onPress}>
    <Text type={type} shape={shape}>
      {text}
    </Text>
  </Container>
);
