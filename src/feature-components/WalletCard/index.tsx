import React from 'react';

import { Text } from '../../components/Text';
import { formatCurrency } from '../../functions/formatCurrency';
import { Graphic } from '../Graphic';
import { Container, GraphicWrapper } from './styles';
import { CardProps } from './types';

export const WalletCard = ({
  title,
  amount,
  currency = 'BRL',
  income = 0,
  outcome = 0,
  hideValues = false,
}: CardProps): JSX.Element => (
  <Container>
    <Text fontSize="normal">{title}</Text>
    <GraphicWrapper>
      <Graphic
        currency={currency}
        income={income}
        outcome={outcome}
        hideValues={hideValues}
      />
    </GraphicWrapper>

    <Text fontSize="small" bold>
      Balance
    </Text>

    {hideValues ? (
      <Text fontSize="normal">***</Text>
    ) : (
      <Text fontSize="normal">{formatCurrency(amount, currency)}</Text>
    )}
  </Container>
);
