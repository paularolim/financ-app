import React from 'react';

import { Text } from '../Text';
import { Container, Separator } from './styles';

export const OrSeparator = (): JSX.Element => (
  <Container>
    <Separator />
    <Text fontSize="small" color="shape_dark">
      or
    </Text>
    <Separator />
  </Container>
);
