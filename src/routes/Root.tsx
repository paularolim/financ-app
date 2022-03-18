import React, { useEffect, useState } from 'react';

import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Guest } from './Guest';
import { User } from './User';

const { Navigator, Screen } = createNativeStackNavigator();

export const Root = () => {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(setUser);

    return subscriber;
  }, []);

  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {user ? (
          <Screen name="User" component={User} />
        ) : (
          <Screen name="Guest" component={Guest} />
        )}
      </Navigator>
    </NavigationContainer>
  );
};
