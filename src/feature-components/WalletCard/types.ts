import { CurrencyTypes } from '../../global/types/CurrencyTypes';

export interface CardProps {
  title: string;
  income: number;
  outcome: number;
  amount: number;
  currency: CurrencyTypes;
  hideValues?: boolean;
}
