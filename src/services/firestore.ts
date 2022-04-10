import firestore from '@react-native-firebase/firestore';

import { User } from '../core/domain/entities/User';
import { Wallet } from '../core/domain/entities/Wallet';
import { Transaction } from '../global/types/Transaction';

/**
 * Get an user by id.
 * @param id id from user.
 * @returns an user.
 * @deprecated
 */
export const getUser = async (id: string) => {
  console.log(`[FIRESTORE] finding user ${id}`);
  return await firestore().collection('users').where('id', '==', id).get();
};

/**
 * Get all transactions from an user.
 * @param user the user logged.
 * @param callback an callback to save transactions.
 * @deprecated
 */
export const getAllTransactions = (
  user: User | null,
  callback: (transactions: Transaction[]) => void,
) => {
  if (user) {
    console.log(`Finding transactions from user ${user?.id}`);

    firestore()
      .collection('transactions')
      .where('user', '==', user?.id)
      .onSnapshot(querySnapshot => {
        const _transactions: Transaction[] = [];
        querySnapshot.forEach(doc => {
          _transactions.push({
            id: doc.id,
            title: doc.data().title,
            description: doc.data().description,
            amount: doc.data().amount,
            type: doc.data().type,
          });
        });
        callback(_transactions);
      });
  }
};

/**
 * @deprecated
 */
export const getAllWallets = (
  user: User | null,
  callback: (wallets: Wallet[]) => void,
) => {
  if (user) {
    console.log(`Finding wallets from user ${user?.id}`);

    firestore()
      .collection('wallets')
      .where('user', '==', user.id)
      .onSnapshot(querySnapshot => {
        const wallets: Wallet[] = [];
        querySnapshot.forEach(doc => {
          wallets.push({
            id: doc.id,
            title: doc.data().title,
            currency: doc.data().currency,
            income: doc.data().income,
            outcome: doc.data().outcome,
            balance: doc.data().balance,
            user: doc.data().user,
            transactions: doc.data().transactions,
          });
        });
        console.log(wallets);
        callback(wallets);
      });
  }
};
