import { Transaction } from '../../../domain/entities/Transaction';
import { ITransactionRepository } from '../../../domain/repositories/ITransactionRepository';
import { IGetTransactionsFromWallet } from './types';

export class GetTransactionsFromWallet implements IGetTransactionsFromWallet {
  constructor(private repository: ITransactionRepository) {}

  handle(
    walletId: string,
    onSuccess: (transactions: Transaction[]) => void,
    onError: (error: Error) => void,
  ): void {
    this.repository.getTransactionsFromWallet(walletId, onSuccess, onError);
  }
}
