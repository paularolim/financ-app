import firestore from '@react-native-firebase/firestore';

import { Transaction } from '../global/types/Transaction';
import { User } from '../global/types/User';

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
