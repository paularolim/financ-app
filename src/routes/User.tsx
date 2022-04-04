import React from 'react';
import { View } from 'react-native';

import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';

import { BottomNavigate } from '../feature-components/BottomNavigate';
import { DrawerHeader } from '../feature-components/DrawerHeader';
import { DrawerItem } from '../feature-components/DrawerItem';
import { Dashboard } from '../screens/Dashboard';
import { Details } from '../screens/Details';
import { logout } from '../services/auth';

export type UserStackParamList = {
  Dashboard: undefined;
  Details: undefined;
};

const { Navigator, Screen } = createDrawerNavigator<UserStackParamList>();

export const User = () => {
  const navigation = useNavigation();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      drawerContent={props => (
        <>
          <DrawerHeader />
          <DrawerContentScrollView {...props}>
            <DrawerItem
              label="Dashboard"
              onPress={() => navigation.navigate('Dashboard')}
            />
            <DrawerItem label="Wallets" onPress={() => {}} />
            <DrawerItem label="Calendar" onPress={() => {}} />
            <DrawerItem label="Analytics" onPress={() => {}} />
            <DrawerItem label="Learn" onPress={() => {}} />
            <DrawerItem label="Settings" onPress={() => {}} />
          </DrawerContentScrollView>
          <View style={{ paddingHorizontal: 40, paddingBottom: 60 }}>
            <BottomNavigate title="Logout" onPress={logout} />
          </View>
        </>
      )}
    >
      <Screen name="Dashboard" component={Dashboard} />
      <Screen name="Details" component={Details} />
    </Navigator>
  );
};
