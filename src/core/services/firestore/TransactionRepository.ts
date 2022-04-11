import firestore from '@react-native-firebase/firestore';

import {
  InputCreateTransaction,
  ITransactionRepository,
} from '../../domain/repositories/ITransactionRepository';

export class TransactionRepository implements ITransactionRepository {
  private collection = 'wallets';

  createTransaction(
    { walletId, amount, type, title, description }: InputCreateTransaction,
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

          transactionsRef.add({ title, description, amount });
        }
      })
      .then(onSuccess)
      .catch(onError);
  }
}
