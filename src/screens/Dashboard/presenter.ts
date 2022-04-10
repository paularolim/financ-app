import { GetAllWalletFromUser } from '../../core/application/usecases/GetAllWalletsFromUser';
import { User } from '../../core/domain/entities/User';
import { Wallet } from '../../core/domain/entities/Wallet';
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
