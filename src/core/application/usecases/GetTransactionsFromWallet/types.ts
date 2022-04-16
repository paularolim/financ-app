import { Transaction } from '../../../domain/entities/Transaction';

export interface IGetTransactionsFromWallet {
  handle(
    walletId: string,
    onSuccess: (transactions: Transaction[]) => void,
    onError: (error: Error) => void,
  ): void;
}
