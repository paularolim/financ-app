import React from 'react';

import auth from '@react-native-firebase/auth';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';

import { Dashboard } from '../screens/Dashboard';

export type UserStackParamList = {
  Dashboard: undefined;
};

const { Navigator, Screen } = createDrawerNavigator<UserStackParamList>();

export const User = () => (
  <Navigator
    screenOptions={{
      headerShown: false,
    }}
    drawerContent={props => (
      <DrawerContentScrollView {...props}>
        <DrawerItem label="Dashboard" onPress={() => {}} />
        <DrawerItem label="Logout" onPress={() => auth().signOut()} />
      </DrawerContentScrollView>
    )}
  >
    <Screen name="Dashboard" component={Dashboard} />
  </Navigator>
);
