import * as React from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
// Api
import { getFavoritePokemonsApi } from '../api/favorite';


export default function Favorites() { 

  const checkFavorite = async () => {
    const response = await getFavoritePokemonsApi();
    console.log(response);
  }

  return (
    <SafeAreaView>
      <Text>Favorites</Text>
      <TouchableOpacity onPress={checkFavorite}>
        <Text>Get favorites</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}