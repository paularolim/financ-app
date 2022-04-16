import React from 'react';

import { DrawerActions, useNavigation } from '@react-navigation/native';

import { Icon } from '../../components/Icon';
import { Text } from '../../components/Text';
import { useDashboardState } from '../../core/application/states/dashboard';
import { Container, MonthContainer, Title } from './styles';
import { HeaderProps } from './types';

// TODO: hidde cards when scroll screen (only show "Dashboard")
export const Header = ({ children }: HeaderProps): JSX.Element => {
  const navigation = useNavigation();

  const [hideValues, setHideValues] = useDashboardState(state => [
    state.hideValues,
    state.setHideValues,
  ]);

  return (
    <Container>
      <Title>
        <Icon
          name="menu-outline"
          onPress={(): void => navigation.dispatch(DrawerActions.openDrawer())}
        />

        {/* TODO: remove month mock */}
        <MonthContainer>
          <Icon name="chevron-back-outline" marginRight={25} size="small" />
          <Text fontSize="medium" color="white" bold>
            Novembro
          </Text>
          <Icon name="chevron-forward-outline" marginLeft={25} size="small" />
        </MonthContainer>

        {hideValues ? (
          <Icon name="eye-outline" size="small" onPress={setHideValues} />
        ) : (
          <Icon name="eye-off-outline" size="small" onPress={setHideValues} />
        )}
      </Title>
      {children}
    </Container>
  );
};
