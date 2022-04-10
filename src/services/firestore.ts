import firestore from '@react-native-firebase/firestore';

import { User } from '../core/domain/entities/User';
import { Transaction } from '../global/types/Transaction';

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
