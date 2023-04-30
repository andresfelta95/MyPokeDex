import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Pokedex from '../screens/Pokedex';
import Pokemon from '../screens/Pokemon';

const Stack = createStackNavigator();

export default function PokedexNavigation() {
  return (
    <Stack.Navigator 
      // make the header to do not overlap the notch
      screenOptions={{
        headerStatusBarHeight: 0,
      }}
    >
      <Stack.Screen 
        name="Pokedex" 
        component={Pokedex}
        options={{
          title: '',
          headerTransparent: true,
        }}
      />
      <Stack.Screen 
        name="Pokemon" 
        component={Pokemon}
        options={{
          title: '',
          headerTransparent: true,
          headerStatusBarHeight: 60,
        }}
      />
    </Stack.Navigator>
  );
}