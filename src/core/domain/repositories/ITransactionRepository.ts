import { Transaction } from '../entities/Transaction';

export interface InputCreateTransaction {
  walletId: string;
  title: string;
  description: string;
  amount: number;
  type: 'income' | 'outcome';
  date: Date;
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

  /**
   * Get all transactions from wallet.
   */
  getTransactionsFromWallet(
    walletId: string,
    onSuccess: (transactions: Transaction[]) => void,
    onError: (error: Error) => void,
    startDate?: string,
    endDate?: string,
  ): void;
}
