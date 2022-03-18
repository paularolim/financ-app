import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { DrawerActions, useNavigation } from '@react-navigation/native';

import { Icon, Text } from '../../components';
import { Card } from '../Card';
import { cardMock } from './mock';
import { Container, IconWrapper, Separator, Title } from './styles';
import { HeaderProps } from './types';

const SeparatorComponent = (): JSX.Element => <Separator />;

// TODO: hidde cards when scroll screen (only show "Dashboard")
export const Header = ({ title }: HeaderProps): JSX.Element => {
  const navigation = useNavigation();

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
        data={cardMock}
        keyExtractor={(item): string => item.id}
        renderItem={({ item }): JSX.Element => <Card {...item} />}
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
