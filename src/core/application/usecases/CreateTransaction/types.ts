export interface InputTransaction {
  walletId: string;
  title: string;
  description: string;
  amount: number;
  type: 'income' | 'outcome';
  date: Date;
}

export interface ICreateTransaction {
  handle(
    transaction: InputTransaction,
    onSuccess: () => void,
    onError: (error: Error) => void,
  ): void;
}
