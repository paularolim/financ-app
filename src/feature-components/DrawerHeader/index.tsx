import React from 'react';

import { Text } from '../../components/Text';
import { useUserStore } from '../../core/application/states/user';
import { Container, ProfileImage } from './styles';

const uri = 'https://static.diverseui.com/female-77.jpg';

export const DrawerHeader = () => {
  const user = useUserStore().user;

  return (
    <Container>
      <ProfileImage source={{ uri }} />
      <Text fontSize="normal" bold color="secondary">
        {user?.name || 'Name not found.'}
      </Text>
    </Container>
  );
};
