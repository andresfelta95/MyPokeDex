import * as React from 'react';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
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
        <Tab.Screen 
            name="Account" 
            component={Account} 
            options={{ 
                tabBarLabel: 'My Account',
                tabBarIcon: ({ color, size }) => (
                    <Icon name="user" color={color} size={size} />
                ),
                }} 
        />
        <Tab.Screen 
            name="Pokedex" 
            component={Pokedex} 
            options={{
                tabBarLabel: '',
                tabBarIcon: () => ( renderPokeball() 
                ),
            }}
        />
        <Tab.Screen 
            name="Favorites" 
            component={Favorites} 
            options={{
                tabBarLabel: 'Favorites',
                tabBarIcon: ({ color, size }) => (
                    <Icon name="heart" color={color} size={size} />
                ),
            }}
        />
      </Tab.Navigator>
  );
}


function renderPokeball() {
  return (
    <Image
        source={require('../assets/pokeball.png')}
        style={{ width: 75, height: 75, top: -20 }}
    />
  );
}