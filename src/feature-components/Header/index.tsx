import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import firestore from '@react-native-firebase/firestore';
import { DrawerActions, useNavigation } from '@react-navigation/native';

import { Icon } from '../../components/Icon';
import { Text } from '../../components/Text';
import { useUserStore } from '../../core/application/states/user';
import { Wallet } from '../../core/domain/entities/Wallet';
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

  const navigation = useNavigation();
  const user = useUserStore().user;

  useEffect(() => {
    console.log('[DASHBOARD HEADER] user', user);
  }, [user]);

  useEffect(() => {
    console.log('[DASHBOARD HEADER] useEffect wallets');
    if (user) {
      return firestore()
        .collection('wallets')
        .where('user', '==', user.id)
        .onSnapshot(querySnapshot => {
          const _wallets: Wallet[] = [];

          querySnapshot.forEach(doc => {
            console.log(`[DASHBOARD HEADER] +1 wallet found (${doc.id})`);

            _wallets.push({
              id: doc.id,
              title: doc.data().title || 'Name not found',
              balance: doc.data().balance || 0,
              income: doc.data().income || 0,
              outcome: doc.data().outcome || 0,
              currency: doc.data().currency || 'BRL',
              user: doc.data().user || '',
              transactions: doc.data().transactions || [],
            });
          });

          setWallets(_wallets);
        });
    }
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
        data={[initialWallet, ...wallets]}
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
