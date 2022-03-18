import React from 'react';

import { Icon, Text } from '../../components';
import { formatCurrency } from '../../functions/formatCurrency';
import { Container, IconWrapper, InfoContainer, InfoWrapper } from './styles';
import { TransactionCardProps } from './types';

// TODO: the icon is based on category
export const TransactionCard = ({
  icon = 'add',
  title,
  description,
  currency,
  value,
  type,
}: TransactionCardProps): JSX.Element => (
  <Container>
    <IconWrapper type={type}>
      <Icon name={icon} />
    </IconWrapper>

    <InfoWrapper>
      <InfoContainer>
        <Text bold>{title}</Text>
        <Text fontSize="small">{formatCurrency(value, currency)}</Text>
      </InfoContainer>

      <Text fontSize="xsmall" color="text_light">
        {description}
      </Text>
    </InfoWrapper>
  </Container>
);
