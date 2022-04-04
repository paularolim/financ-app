import React, { useEffect, useState } from 'react';

import { Text } from '../../components/Text';
import { User } from '../../global/types/User';
import { getItem } from '../../services/storage';
import { Container, ProfileImage } from './styles';

const uri = 'https://static.diverseui.com/female-77.jpg';

export const DrawerHeader = () => {
  const [user, setUser] = useState<User | null>();

  useEffect(() => {
    const loadUser = async () => {
      const userFromStorage = await getItem('user');
      setUser(JSON.parse(userFromStorage || ''));
    };

    loadUser();
  }, []);

  return (
    <Container>
      <ProfileImage source={{ uri }} />
      <Text fontSize="normal" bold color="secondary">
        {user?.name || 'Name not found.'}
      </Text>
    </Container>
  );
};
