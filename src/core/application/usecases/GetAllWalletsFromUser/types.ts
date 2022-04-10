import { User } from '../../../domain/entities/User';
import { Wallet } from '../../../domain/entities/Wallet';

export interface InputGetAllWalletFromUser {
  user: User;
}

export interface IGetAllWalletFromUser {
  handle(
    wallet: InputGetAllWalletFromUser,
    onSuccess: (wallets: Wallet[]) => void,
    onError: (error: Error) => void,
  ): void;
}
