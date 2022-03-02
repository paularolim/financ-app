import React from 'react';

import { Text } from '../Text';
import { Container } from './styles';
import { SocialButtonProps } from './types';

export const SocialButton = ({
  children,
  ...rest
}: SocialButtonProps): JSX.Element => (
  <Container {...rest}>
    <Text fontSize="small" textCase="uppercase" letterSpacing="small">
      {children}
    </Text>
  </Container>
);
