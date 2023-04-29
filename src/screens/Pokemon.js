import * as React from 'react';
import { SafeAreaView, Text } from 'react-native';
//  Get the pokemon details by id
import { getPokemonDetailsByIdApi } from '../api/pokemon';

export default function Pokemon(props) {
  const { navigation, route } = props;
  const {id , name} = route.params;

  const [pokemon, setPokemon] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      try {
        const response = await getPokemonDetailsByIdApi(id);
        setPokemon(response);
      } catch (error) {
        navigation.goBack();
      }
    })();
  }, [route.params]);
  console.log(pokemon);

  if (!pokemon) return null;

  return (
    <SafeAreaView>
      <Text>Pokemon {pokemon.name}</Text>
    </SafeAreaView>
  );
}