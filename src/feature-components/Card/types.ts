import { CurrencyTypes } from '../../global/types/CurrencyTypes';

export interface CardProps {
  title: string;
  income: number;
  outcome: number;
  value: number;
  currency: CurrencyTypes;
}
