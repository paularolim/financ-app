import { CurrencyTypes } from '../global/types/CurrencyTypes';

export const CurrencySymbols = {
  BRL: 'R$',
  USD: '$',
};

export const CurrencySeparator = {
  BRL: ',',
  USD: '.',
};

// TODO: add thousands separator
export function formatCurrency(value: number, currency: CurrencyTypes): string {
  const price = value.toFixed(2).replace('.', CurrencySeparator[currency]);
  const formatedCurrency = CurrencySymbols[currency];
  return `${formatedCurrency} ${price}`;
}
