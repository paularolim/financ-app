import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Introduction } from '../screens/Introduction';
import { Login } from '../screens/Login';
import { Onboard } from '../screens/Onboard';
import { Register } from '../screens/Register';
import { Welcome } from '../screens/Welcome';

export type GuestStackParamList = {
  Introduction: undefined;
  Onboard: undefined;
  Welcome: undefined;
  Register: undefined;
  Login: undefined;
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
    <Screen name="Register" component={Register} />
    <Screen name="Login" component={Login} />
  </Navigator>
);
