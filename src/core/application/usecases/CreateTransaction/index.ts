import { ITransactionRepository } from '../../../domain/repositories/ITransactionRepository';
import { ICreateTransaction, InputTransaction } from './types';

export class CreateTransaction implements ICreateTransaction {
  constructor(private repository: ITransactionRepository) {}

  handle(
    transaction: InputTransaction,
    onSuccess: () => void,
    onError: (error: Error) => void,
  ): void {
    this.repository.createTransaction(transaction, onSuccess, onError);
  }
}
