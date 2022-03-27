import { CurrencyTypes } from '../global/types/CurrencyTypes';

export const CurrencyLangs = {
  BRL: 'pr-BR',
  USD: 'en-US',
};

export function formatCurrency(value: number, currency: CurrencyTypes): string {
  const price = new Intl.NumberFormat(CurrencyLangs[currency], {
    style: 'currency',
    currency,
  }).format(value);
  return price;
}
