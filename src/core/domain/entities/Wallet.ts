export interface Wallet {
  id: string;
  title: string;
  currency: 'BRL' | 'USD';
  income: number;
  outcome: number;
  balance: number;
  user: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  transactions: any[];
}
