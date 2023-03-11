import * as React from 'react';
import {SafeAreaView, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Pokemon from './Pokemon';

export default function Pokedex() {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <Text>Pokedex Page 🧑🏽‍💻</Text>
    </SafeAreaView>
  );
}