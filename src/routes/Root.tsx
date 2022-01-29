import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Guest } from './Guest';

const { Navigator, Screen } = createNativeStackNavigator();

export const Root = () => (
  <NavigationContainer>
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Guest" component={Guest} />
    </Navigator>
  </NavigationContainer>
);
