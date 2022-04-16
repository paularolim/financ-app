import { GetAllWalletFromUser } from '../../core/application/usecases/GetAllWalletsFromUser';
import { GetTransactionsFromWallet } from '../../core/application/usecases/GetTransactionsFromWallet';
import { Transaction } from '../../core/domain/entities/Transaction';
import { User } from '../../core/domain/entities/User';
import { Wallet } from '../../core/domain/entities/Wallet';
import { TransactionRepository } from '../../core/services/firestore/TransactionRepository';
import { WalletRepository } from '../../core/services/firestore/WalletRepository';

export const getAllWalletsFromUser = (
  user: User,
  onSuccess: (wallets: Wallet[]) => void,
  onError: (error: Error) => void,
): void => {
  console.log(`[DASHBOARD PRESENTER] finding wallets from user ${user.id}`);

  const repository = new WalletRepository();
  const service = new GetAllWalletFromUser(repository);
  service.handle({ user }, onSuccess, onError);
};

export const getTransactionsFromWallets = (
  walletId: string,
  onSuccess: (transactions: Transaction[]) => void,
  onError: (error: Error) => void,
) => {
  console.log(
    `[DASHBOARD PRESENTER] finding transactions from wallet ${walletId}`,
  );
  const repository = new TransactionRepository();
  const service = new GetTransactionsFromWallet(repository);
  service.handle(walletId, onSuccess, onError);
};
