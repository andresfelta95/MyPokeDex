import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//  Import screens
import Account from '../screens/Account';
import Favorites from '../screens/Favorites';
import Pokedex from '../screens/Pokedex';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Account" component={Account} />
        <Tab.Screen name="Favorites" component={Favorites} />
        <Tab.Screen name="Pokedex" component={Pokedex} />
      </Tab.Navigator>
  );
}