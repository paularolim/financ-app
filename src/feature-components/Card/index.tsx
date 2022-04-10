import React from 'react';

import { Text } from '../../components/Text';
import { formatCurrency } from '../../functions/formatCurrency';
import { Graphic } from '../Graphic';
import { Container, GraphicWrapper } from './styles';
import { CardProps } from './types';

export const Card = ({
  title,
  value,
  currency = 'BRL',
  income = 0,
  outcome = 0,
}: CardProps): JSX.Element => (
  <Container>
    <Text fontSize="normal">{title}</Text>
    <GraphicWrapper>
      <Graphic currency={currency} income={income} outcome={outcome} />
    </GraphicWrapper>

    <Text fontSize="normal">{formatCurrency(value, currency)}</Text>
  </Container>
);
