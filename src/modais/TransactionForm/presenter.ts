import { CreateTransaction } from '../../core/application/usecases/CreateTransaction';
import { GetAllWalletFromUser } from '../../core/application/usecases/GetAllWalletsFromUser';
import { User } from '../../core/domain/entities/User';
import { Wallet } from '../../core/domain/entities/Wallet';
import { TransactionRepository } from '../../core/services/firestore/TransactionRepository';
import { WalletRepository } from '../../core/services/firestore/WalletRepository';

export const getAllWalletsFromUser = (
  user: User,
  onSuccess: (wallets: Wallet[]) => void,
  onError: (error: Error) => void,
): void => {
  console.log(
    `[TRANSACTION FORM PRESENTER] finding wallets from user ${user.id}`,
  );

  const repository = new WalletRepository();
  const service = new GetAllWalletFromUser(repository);
  service.handle({ user }, onSuccess, onError);
};

export const createTransaction = (
  walletId: string,
  title: string,
  description: string,
  amount: number,
  type: 'income' | 'outcome',
  onSuccess: () => void,
  onError: (error: Error) => void,
): void => {
  console.log(
    `[TRANSACTION FORM PRESENTER] creating transaction on wallet ${walletId}`,
  );

  const repository = new TransactionRepository();
  const service = new CreateTransaction(repository);
  service.handle(
    { walletId, title, description, amount, type },
    onSuccess,
    onError,
  );
};
