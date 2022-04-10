import { User } from '../entities/User';
import { Wallet } from '../entities/Wallet';

export interface InputCreateWallet {
  title: string;
  user: string;
}

export interface IWalletRepository {
  /**
   * Create a wallet/account in the app.
   */
  createWallet(input: InputCreateWallet): void;

  /**
   * Get a wallet/account by id.
   * @param wallet Wallet
   */
  getWallet(wallet: Partial<Wallet>): Wallet;

  /**
   * Get a wallet/account from an user.
   * @param user User
   */
  getAllWalletsFromUser(
    user: User,
    onSuccess: (wallets: Wallet[]) => void,
    onError: (error: Error) => void,
  ): void;

  /**
   * Update information from a wallet.
   * @param wallet Wallet
   */
  updateWallet(wallet: Partial<Wallet>): Wallet;

  /**
   * Remove a wallet/account from app (and all transactions).
   * @param wallet Wallet
   */
  removeWallet(wallet: Wallet): boolean;
}
