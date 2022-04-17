export interface Transaction {
  id: string;
  title: string;
  description: string;
  amount: number;
  type: 'income' | 'outcome';
  date: Date;
}
