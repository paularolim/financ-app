import { IWalletRepository } from '../../../domain/repositories/IWalletRepository';
import { InputWallet, ICreateWallet } from './types';

export class CreateWallet implements ICreateWallet {
  constructor(private repository: IWalletRepository) {}

  handle(wallet: InputWallet): void {
    this.repository.createWallet(wallet);
  }
}
