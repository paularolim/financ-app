import React, { useEffect, useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Modal,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { FabButton } from '../../components/FabButton';
import { useDashboardState } from '../../core/application/states/dashboard';
import { useUserStore } from '../../core/application/states/user';
import { Transaction } from '../../core/domain/entities/Transaction';
import { Wallet } from '../../core/domain/entities/Wallet';
import { Header } from '../../feature-components/Header';
import { ListWallets } from '../../feature-components/ListWallets';
import { TransactionCard } from '../../feature-components/TransactionCard';
import { TransactionForm } from '../../modais/TransactionForm';
import { WalletForm } from '../../modais/WalletForm';
// import { getAllTransactions } from '../../services/firestore';
import { TransactionsEmptyList } from './components/TransactionsEmptyList';
import { TransactionsHeader } from './components/TransactionsHeader';
import { TransactionsSeparator } from './components/TransactionsSeparator';
import { getAllWalletsFromUser, getTransactionsFromWallets } from './presenter';
import { Container } from './styles';

const initialWallet: Wallet = {
  id: 'total',
  title: 'Total',
  balance: 0,
  income: 0,
  outcome: 0,
  currency: 'BRL',
  user: 'mock_id',
  transactions: [],
};

export const Dashboard = (): JSX.Element => {
  const [modalTransactionVisible, setModalTransactionVisible] = useState(false);
  const [modalWalletVisible, setModalWalletVisible] = useState(false);

  const [totalWallet, setTotalWallets] = useState<Wallet>(initialWallet);
  const [wallets, setWallets] = useState<Wallet[]>([]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const activeWallet = useDashboardState(state => state.wallet);
  const user = useUserStore().user;
  const navigation = useNavigation();

  const calculateTotal = (items: Wallet[]) => {
    if (user) {
      console.log(`[DASHBOARD] calculating total from user ${user.id}`);

      let _balance = 0;
      let _income = 0;
      let _outcome = 0;
      items.forEach(wallet => {
        _balance += wallet.balance;
        _income += wallet.income;
        _outcome += wallet.outcome;
      });
      setTotalWallets({
        ...initialWallet,
        balance: _balance,
        income: _income,
        outcome: _outcome,
        user: user.id,
      });
    }
  };

  useEffect(() => {
    if (user) {
      getAllWalletsFromUser(
        user,
        _wallets => {
          setWallets(_wallets);
          calculateTotal(_wallets);
        },
        error => console.log(error),
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  useEffect(() => {
    if (user && activeWallet) {
      getTransactionsFromWallets(
        activeWallet,
        _transactions => {
          setTransactions(_transactions);
          setLoading(false);
        },
        error => console.log(error),
      );
    }
  }, [user, activeWallet]);

  return (
    <Container>
      <Header>
        <ListWallets data={[totalWallet, ...wallets]} />
      </Header>
      <FabButton
        onPressTransaction={() =>
          setModalTransactionVisible(!modalTransactionVisible)
        }
        onPressWallet={() => setModalWalletVisible(!modalWalletVisible)}
      />

      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <>
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => {
              // TODO: update list on refresh
              // getAllTransactions(user, setTransactions);
              setRefreshing(false);
            }}
            style={styles.refreshControl}
          >
            <FlatList
              data={transactions}
              renderItem={({ item }): JSX.Element => (
                <TransactionCard
                  id={item.id}
                  title={item.title}
                  description={item.description}
                  value={item.amount}
                  type={item.type}
                  date={item.date}
                  onPress={() => {
                    navigation.navigate('Details');
                  }}
                />
              )}
              keyExtractor={(item): string => item.id}
              ListHeaderComponent={TransactionsHeader}
              ItemSeparatorComponent={TransactionsSeparator}
              ListEmptyComponent={TransactionsEmptyList}
              contentContainerStyle={styles.flatListContentContainerStyle}
              style={styles.flatListStyle}
            />
          </RefreshControl>

          <Modal visible={modalTransactionVisible}>
            <TransactionForm
              onClose={() =>
                setModalTransactionVisible(!modalTransactionVisible)
              }
            />
          </Modal>
          <Modal visible={modalWalletVisible}>
            <WalletForm
              onClose={() => setModalWalletVisible(!modalWalletVisible)}
            />
          </Modal>
        </>
      )}
    </Container>
  );
};

const styles = StyleSheet.create({
  flatListStyle: {
    width: '100%',
  },
  flatListContentContainerStyle: {
    paddingVertical: 15,
    paddingHorizontal: 40,
  },
  refreshControl: {
    width: '100%',
    flex: 1,
  },
});
