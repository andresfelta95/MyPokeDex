import * as React from 'react';
import {SafeAreaView, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFocusEffect } from '@react-navigation/native';
// Api
import { getFavoritePokemonsApi } from '../api/favorite';
import { getPokemonDetailsByIdApi } from '../api/pokemon';
// Hooks
import useAuth from '../hooks/useAuth';
// Components
import PokemonList from '../components/PokemonList';


export default function Favorites() { 
  const navigation = useNavigation();
  const { auth } = useAuth();
  const [favorites, setFavorites] = React.useState([]);

  useFocusEffect(
    React.useCallback(() => {
      if (auth) {
        (async () => {
          try {
            const response = await getFavoritePokemonsApi();
            console.log(response);    
            const pokemonList = [];
            for await (const id of response) {
              const pokemonData = await getPokemonDetailsByIdApi(id);
              pokemonList.push({
                id: pokemonData.id,
                name: pokemonData.name,
                types: pokemonData.types[0].type.name,
                order: pokemonData.order,
                image: pokemonData.sprites.other['official-artwork'].front_default,
              });
            }
            setFavorites(pokemonList);
          } catch (error) {
            console.log(error);
            throw error;
          }
        })();
      }
    }, [auth]));
  
  return !auth ? (
    <SafeAreaView style={styles.container}>
    <Text style={styles.text}>
      You must be logged in to see your favorites
    </Text>
    <TouchableOpacity 
      style={styles.button}
      onPress={() => navigation.navigate('Account')}
    >
      <Text
        style={styles.buttonText}
      >
        Go to login
      </Text>
    </TouchableOpacity>
    </SafeAreaView>
    ) : (
    <PokemonList pokemons={favorites} />
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#357',
    height: '100%',
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 40,
    fontSize: 18,
  },
  button: {
    backgroundColor: '#0098d3',
    padding: 10,
    borderRadius: 20,
    width: '50%',
    alignSelf: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  },
});