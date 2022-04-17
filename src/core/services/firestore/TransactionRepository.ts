import firestore from '@react-native-firebase/firestore';

import { Transaction } from '../../domain/entities/Transaction';
import {
  InputCreateTransaction,
  ITransactionRepository,
} from '../../domain/repositories/ITransactionRepository';

export class TransactionRepository implements ITransactionRepository {
  private collection = 'wallets';

  createTransaction(
    {
      walletId,
      amount,
      type,
      title,
      description,
      date,
    }: InputCreateTransaction,
    onSuccess: () => void,
    onError: (error: Error) => void,
  ): void {
    const walletsRef = firestore().doc(`wallets/${walletId}`);
    const transactionsRef = firestore().collection(
      `wallets/${walletId}/transactions`,
    );

    firestore()
      .runTransaction(async fbTransaction => {
        const walletSnap = await fbTransaction.get(walletsRef);

        if (walletSnap.exists) {
          const balance = walletSnap.data()?.balance || 0;
          const income = walletSnap.data()?.income || 0;
          const outcome = walletSnap.data()?.outcome || 0;

          const balanceUpdated =
            type === 'income' ? balance + amount : balance - amount;
          const incomeUpdated = income + amount;
          const outcomeUpdated = outcome + amount;

          type === 'income'
            ? fbTransaction.update(walletsRef, {
                balance: balanceUpdated,
                income: incomeUpdated,
              })
            : fbTransaction.update(walletsRef, {
                balance: balanceUpdated,
                outcome: outcomeUpdated,
              });

          transactionsRef.add({ title, description, amount, type, date });
        }
      })
      .then(onSuccess)
      .catch(onError);
  }

  getTransactionsFromWallet(
    walletId: string,
    onSuccess: (transactions: Transaction[]) => void,
    onError: (error: Error) => void,
  ): void {
    const transactionsRef = firestore().collection(
      `wallets/${walletId}/transactions`,
    );

    try {
      transactionsRef.orderBy('date', 'desc').onSnapshot(querySnapshot => {
        const _transactions: Transaction[] = [];

        querySnapshot.forEach(doc => {
          console.log(
            `[TRANSACTION REPOSITORY] +1 transaction found (${doc.id})`,
          );
          const data = doc.data();

          _transactions.push({
            id: doc.id,
            title: data.title,
            description: data.description,
            amount: data.amount,
            type: data.type,
            date: data?.date?.toDate()?.toLocaleDateString('en-US') || '',
          });
        });

        onSuccess(_transactions);
      });
    } catch (error) {
      onError(error as Error);
    }
  }
}
