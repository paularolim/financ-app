import firestore from '@react-native-firebase/firestore';

import { Transaction } from '../global/types/Transaction';
import { User } from '../global/types/User';

/**
 * Get an user by id.
 * @param id id from user.
 * @returns an user.
 */
export const getUser = async (id: string) => {
  console.log(`[FIRESTORE] finding user ${id}`);
  return await firestore().collection('users').where('id', '==', id).get();
};

/**
 * Get all transactions from an user.
 * @param user the user logged.
 * @param callback an callback to save transactions.
 */
export const getAllTransactions = (
  user: User | null,
  callback: (transactions: Transaction[]) => void,
) => {
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
};
