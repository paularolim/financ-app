import React from 'react';

import { Icon } from '../Icon';
import { Text } from '../Text';
import { Container } from './styles';
import { TransactionTypeProps } from './types';

export const TransactionType = ({
  active,
  type,
  text,
  ...rest
}: TransactionTypeProps) => (
  <Container active={active} type={type} {...rest}>
    {type === 'income' ? (
      <Icon name="arrow-up-circle-outline" color="success" marginRight={10} />
    ) : (
      <Icon name="arrow-down-circle-outline" color="danger" marginRight={10} />
    )}
    <Text>{text}</Text>
  </Container>
);
