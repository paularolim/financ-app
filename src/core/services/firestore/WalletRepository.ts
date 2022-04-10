import firestore from '@react-native-firebase/firestore';

import { User } from '../../domain/entities/User';
import { Wallet } from '../../domain/entities/Wallet';
import type {
  InputCreateWallet,
  IWalletRepository,
} from '../../domain/repositories/IWalletRepository';

export class WalletRepository implements IWalletRepository {
  private collection = 'wallets';

  createWallet({ title, user }: InputCreateWallet): void {
    firestore()
      .collection(this.collection)
      .add({ title, user })
      .catch(error => {
        throw new Error(error);
      });
  }

  getWallet(wallet: Partial<Wallet>): Wallet {
    // TODO: implement method.
    return wallet as Wallet;
  }

  getAllWalletsFromUser(
    user: User,
    onSuccess: (wallets: Wallet[]) => void,
    onError: (error: Error) => void,
  ): void {
    try {
      firestore()
        .collection(this.collection)
        .where('user', '==', user.id)
        .onSnapshot(querySnapshot => {
          const _wallets: Wallet[] = [];
          querySnapshot.forEach(doc => {
            console.log(`[WALLET REPOSITORY] +1 wallet found (${doc.id})`);
            _wallets.push({
              id: doc.id,
              title: doc.data().title || 'Name not found',
              balance: doc.data().balance || 0,
              income: doc.data().income || 0,
              outcome: doc.data().outcome || 0,
              currency: doc.data().currency || 'BRL',
              user: doc.data().user || '',
              transactions: doc.data().transactions || [],
            });
          });
          onSuccess(_wallets);
        });
    } catch (error) {
      onError(error as Error);
    }
  }

  updateWallet(wallet: Partial<Wallet>): Wallet {
    // TODO: implement method.
    return wallet as Wallet;
  }

  removeWallet(wallet: Wallet): boolean {
    // TODO: implement method.
    return Boolean(wallet);
  }
}
