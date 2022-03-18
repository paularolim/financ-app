import { CurrencyTypes } from '../../global/types/CurrencyTypes';

export interface CardMock {
  id: string;
  title: string;
  income: number;
  outcome: number;
  currency: CurrencyTypes;
  value: number;
}

export const cardMock: CardMock[] = [
  {
    id: '01',
    title: 'Total',
    income: 1000,
    outcome: 600,
    value: 400,
    currency: 'BRL',
  },
  {
    id: '02',
    title: 'Banco 1',
    income: 5000,
    outcome: 356,
    value: 4644,
    currency: 'BRL',
  },
  {
    id: '03',
    title: 'Banco 2',
    income: 2500,
    outcome: 4000,
    value: -1500,
    currency: 'BRL',
  },
];
