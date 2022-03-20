import React, { useEffect, useState } from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  Modal,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';

import { FabButton } from '../../components/FabButton';
import { Text } from '../../components/Text';
import { Header } from '../../feature-components/Header';
import { TransactionCard } from '../../feature-components/TransactionCard';
import { Transaction } from '../../global/types/Transaction';
import { User } from '../../global/types/User';
import { TransactionForm } from '../../modais/TransactionForm';
import { getAllTransactions } from '../../services/firestore';
import { getItem } from '../../services/storage';
import { Container } from './styles';

const FlatListHeader = () => (
  <View style={styles.titleStyle}>
    <Text fontSize="normal" bold>
      Transactions
    </Text>
  </View>
);
const Separator = () => <View style={styles.separatorStyle} />;
const Empty = () => <Text>No transactions to display</Text>;

export const Dashboard = (): JSX.Element => {
  const [modalTransactionVisible, setModalTransactionVisible] = useState(false);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const loadUser = async () => {
      const result = await getItem('user');
      setUser(result ? (JSON.parse(result) as User) : null);
    };
    loadUser();
  }, []);

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
        onPressTransaction={(): void =>
          setModalTransactionVisible(!modalTransactionVisible)
        }
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
                />
              )}
              keyExtractor={(item): string => item.id}
              ListHeaderComponent={FlatListHeader}
              ItemSeparatorComponent={Separator}
              ListEmptyComponent={Empty}
              contentContainerStyle={styles.flatListContentContainerStyle}
              style={styles.flatListStyle}
            />
          </RefreshControl>
          <Modal visible={modalTransactionVisible}>
            <TransactionForm
              onClose={(): void =>
                setModalTransactionVisible(!modalTransactionVisible)
              }
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
  separatorStyle: {
    height: 15,
  },
  titleStyle: {
    marginBottom: 10,
  },
  refreshControl: {
    width: '100%',
    flex: 1,
  },
});
