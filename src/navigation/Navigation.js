import * as React from 'react';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//  Import screens
import Account from '../screens/Account';
import FavoriteNavigation from './FavoriteNavigation';
import PokedexNavigation from './PokedexNavigation';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
      <Tab.Navigator initialRouteName='PokedexNavigator'>
        <Tab.Screen 
            name="Account" 
            component={Account} 
            options={{ 
                tabBarLabel: 'My Account',
                tabBarIcon: ({ color, size, focused }) => (
                    <Icon name="user" color={focused ? '#F00' : color} size={size} />
                ),
                headerTitle: '',
                headerTitleAlign: 'center',
                headerTransparent: true,
                }} 
        />
        <Tab.Screen
            name="PokedexNavigator"
            component={PokedexNavigation}
            options={{
                title: '',
                headerTransparent: true,
                tabBarIcon: () => ( renderPokeball() 
                ),
                headerTitleAlign: 'center',
            }}
        />
        <Tab.Screen 
            name="FavoriteNavigation" 
            component={FavoriteNavigation} 
            options={{
                tabBarLabel: 'Favorites',
                tabBarIcon: ({ color, size, focused }) => (
                    <Icon name="heart" color={focused ? '#F00' : color} size={size} />
                ),
                headerTitle: '',
                headerTitleAlign: 'center',
                headerTransparent: true,
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