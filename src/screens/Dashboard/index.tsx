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
import { useUserStore } from '../../core/application/states/user';
import { Header } from '../../feature-components/Header';
import { TransactionCard } from '../../feature-components/TransactionCard';
import { Transaction } from '../../global/types/Transaction';
import { TransactionForm } from '../../modais/TransactionForm';
import { WalletForm } from '../../modais/WalletForm';
import { getAllTransactions } from '../../services/firestore';
import { TransactionsEmptyList } from './components/TransactionsEmptyList';
import { TransactionsHeader } from './components/TransactionsHeader';
import { TransactionsSeparator } from './components/TransactionsSeparator';
import { Container } from './styles';

export const Dashboard = (): JSX.Element => {
  const [modalTransactionVisible, setModalTransactionVisible] = useState(false);
  const [modalWalletVisible, setModalWalletVisible] = useState(false);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const user = useUserStore().user;
  const navigation = useNavigation();

  useEffect(() => {
    const subscriber = () => {
      if (user) {
        getAllTransactions(user, setTransactions);
      }
      setLoading(false);
    };

    return () => subscriber();
  }, [user]);

  return (
    <Container>
      <Header title="Dashboard" />
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
              getAllTransactions(user, setTransactions);
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
