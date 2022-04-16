import { CurrencyTypes } from '../../global/types/CurrencyTypes';

export interface GraphicProps {
  income: number;
  outcome: number;
  currency: CurrencyTypes;
  hideValues?: boolean;
}
