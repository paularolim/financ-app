export interface InputCreateTransaction {
  walletId: string;
  title: string;
  description: string;
  amount: number;
  type: 'income' | 'outcome';
}

export interface ITransactionRepository {
  /**
   * Create a transaction.
   */
  createTransaction(
    input: InputCreateTransaction,
    onSuccess: () => void,
    onError: (error: Error) => void,
  ): void;
}
