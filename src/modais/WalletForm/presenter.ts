import { CreateWallet } from '../../core/application/usecases/CreateWallet';
import { User } from '../../core/domain/entities/User';
import { WalletRepository } from '../../core/services/firestore/WalletRepository';

export const createWallet = (
  title: string,
  user: User,
  onSuccess: () => void,
  onError: () => void,
): void => {
  console.log(`[DASHBOARD PRESENTER] creating wallet for user ${user.id}`);

  try {
    const repository = new WalletRepository();
    const service = new CreateWallet(repository);
    service.handle({ title, user: user.id });

    onSuccess();
  } catch (error) {
    onError();
  }
};
