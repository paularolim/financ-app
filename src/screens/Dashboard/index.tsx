import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import { Text } from '../../components';
import { FabButton } from '../../components/FabButton';
import { Header } from '../../feature-components/Header';
import { TransactionCard } from '../../feature-components/TransactionCard';
import { transactionsMock } from '../../feature-components/TransactionCard/mock';
import { Container } from './styles';

export const Dashboard = (): JSX.Element => (
  <Container>
    <Header title="Dashboard" />
    <FabButton />

    <FlatList
      data={transactionsMock}
      renderItem={({ item }): JSX.Element => <TransactionCard {...item} />}
      keyExtractor={(item): string => item.id}
      ListHeaderComponent={(): JSX.Element => (
        <View style={styles.titleStyle}>
          <Text fontSize="normal" bold>
            Transactions
          </Text>
        </View>
      )}
      ItemSeparatorComponent={(): JSX.Element => (
        <View style={styles.separatorStyle} />
      )}
      contentContainerStyle={styles.flatListContentContainerStyle}
      style={styles.flatListStyle}
    />
  </Container>
);

const styles = StyleSheet.create({
  flatListStyle: {
    width: '100%',
  },
  flatListContentContainerStyle: {
    padding: 40,
  },
  separatorStyle: {
    height: 15,
  },
  titleStyle: {
    marginBottom: 15,
  },
});
