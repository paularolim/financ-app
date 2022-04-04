import React from 'react';

import { Text } from '../../components/Text';
import { Container } from './styles';
import { DrawerItemProps } from './types';

export const DrawerItem = ({ label, onPress }: DrawerItemProps) => (
  <Container onPress={onPress}>
    <Text fontSize="medium" bold>
      {label}
    </Text>
  </Container>
);
