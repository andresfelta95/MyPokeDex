import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Pokedex from '../screens/Pokedex';
import Pokemon from '../screens/Pokemon';

const Stack = createStackNavigator();

export default function PokedexNavigation() {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false,
        }}
    >
      <Stack.Screen name="Pokemon" component={Pokemon} />
      <Stack.Screen name="Pokedex" component={Pokedex} />
    </Stack.Navigator>
  );
}