import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Introduction } from '../screens/Introduction';
import { Onboard } from '../screens/Onboard';
import { Welcome } from '../screens/Welcome';

export type GuestStackParamList = {
  Introduction: undefined;
  Onboard: undefined;
  Welcome: undefined;
};

const { Navigator, Screen } = createNativeStackNavigator<GuestStackParamList>();

export const Guest = () => (
  <Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Screen name="Introduction" component={Introduction} />
    <Screen name="Onboard" component={Onboard} />
    <Screen name="Welcome" component={Welcome} />
  </Navigator>
);
