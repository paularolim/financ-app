import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { DrawerActions, useNavigation } from '@react-navigation/native';

import { Icon } from '../../components/Icon';
import { Text } from '../../components/Text';
import { useUserStore } from '../../core/application/states/user';
import { Wallet } from '../../core/domain/entities/Wallet';
import { getAllWalletsFromUser } from '../../screens/Dashboard/presenter';
import { Card } from '../Card';
import { Container, IconWrapper, Separator, Title } from './styles';
import { HeaderProps } from './types';
const SeparatorComponent = (): JSX.Element => <Separator />;

const initialWallet: Wallet = {
  id: '001',
  title: 'Total',
  balance: 0,
  income: 0,
  outcome: 0,
  currency: 'BRL',
  user: 'mock_id',
  transactions: [],
};

// TODO: hidde cards when scroll screen (only show "Dashboard")
export const Header = ({ title }: HeaderProps): JSX.Element => {
  const [wallets, setWallets] = useState<Wallet[]>([]);
  const [totalWallet, setTotalWallets] = useState<Wallet>(initialWallet);

  const navigation = useNavigation();
  const user = useUserStore().user;

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

  return (
    <Container>
      <Title>
        <IconWrapper
          onPress={(): void => navigation.dispatch(DrawerActions.openDrawer())}
        >
          <Icon name="menu-outline" />
        </IconWrapper>
        <Text fontSize="big" color="white" bold>
          {title}
        </Text>
      </Title>

      {/* TODO: list transctions from wallet when on press */}
      <FlatList
        data={[totalWallet, ...wallets]}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Card
            currency={item.currency}
            title={item.title}
            income={item.income}
            outcome={item.outcome}
            value={item.balance}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={SeparatorComponent}
        contentContainerStyle={styles.listContainer}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: 40,
  },
});
