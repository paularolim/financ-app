import React, { useEffect, useState } from 'react';

import { Text } from '../../components/Text';
import { formatCurrency } from '../../functions/formatCurrency';
import { Container, GraphicBar, IncomeBar, Info, OutcomeBar } from './styles';
import { GraphicProps } from './types';

export const Graphic = ({
  income,
  outcome,
  currency,
}: GraphicProps): JSX.Element => {
  const [incomePercentage, setIncomePercentage] = useState(0);
  const [outcomePercentage, setOutcomePercentage] = useState(0);

  const [incomePercentageStyle, setIncomePercentageStyle] = useState(0);
  const [outcomePercentageStyle, setOutcomePercentageStyle] = useState(0);

  useEffect(() => {
    const calculatePercentage = (): void => {
      const _total = income - outcome;

      let _income = ((income - outcome) * 100) / income || 0;
      setIncomePercentage(_income);
      _income = _income < 0 ? 0 : _income;
      _income = _income > 100 ? 100 : _income;
      setIncomePercentageStyle(_income);

      let _outcome = ((income - _total) * 100) / income || 0;
      setOutcomePercentage(_outcome);
      _outcome = _outcome < 0 ? 0 : _outcome;
      _outcome = _outcome > 100 ? 100 : _outcome;
      setOutcomePercentageStyle(_outcome);
    };

    calculatePercentage();
  }, [income, incomePercentage, outcome, outcomePercentage]);

  return (
    <Container>
      <Info>
        <Text color="success">{incomePercentage}%</Text>
        <Text color="danger">{outcomePercentage}%</Text>
      </Info>

      <GraphicBar>
        <IncomeBar width={incomePercentageStyle} />
        <OutcomeBar width={outcomePercentageStyle} />
      </GraphicBar>

      <Info>
        <Text color="success">{formatCurrency(income, currency)}</Text>
        <Text color="danger">{formatCurrency(outcome, currency)}</Text>
      </Info>
    </Container>
  );
};
