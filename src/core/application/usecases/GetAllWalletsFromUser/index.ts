import { Wallet } from '../../../domain/entities/Wallet';
import { IWalletRepository } from '../../../domain/repositories/IWalletRepository';
import { IGetAllWalletFromUser, InputGetAllWalletFromUser } from './types';

export class GetAllWalletFromUser implements IGetAllWalletFromUser {
  constructor(private repository: IWalletRepository) {}

  handle(
    wallet: InputGetAllWalletFromUser,
    onSuccess: (wallets: Wallet[]) => void,
    onError: (error: Error) => void,
  ): void {
    this.repository.getAllWalletsFromUser(wallet.user, onSuccess, onError);
  }
}
