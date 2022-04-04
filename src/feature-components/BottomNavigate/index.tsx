import React from 'react';

import { Icon } from '../../components/Icon';
import { Text } from '../../components/Text';
import { Action, Container } from './styles';
import { BottomNavigateProps } from './types';

export const BottomNavigate = ({
  title,
  description,
  onPress,
}: BottomNavigateProps) => (
  <Container>
    {description && <Text fontSize="small">{description}</Text>}
    <Action onPress={onPress}>
      <Text
        color="secondary"
        fontSize="small"
        textCase="uppercase"
        bold
        letterSpacing="small"
      >
        {title}
      </Text>
      <Icon
        name="arrow-forward-outline"
        color="secondary"
        size="small"
        marginLeft={20}
      />
    </Action>
  </Container>
);
