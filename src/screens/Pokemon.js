import * as React from 'react';
import { ScrollView } from 'react-native';
//  Get the pokemon details by id
import { getPokemonDetailsByIdApi } from '../api/pokemon';
//  Import components
import Header from '../components/Pokemon/Header';

export default function Pokemon(props) {
  const { navigation, route } = props;
  const {id} = route.params;

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

  if (!pokemon) return null;

  return (
    <ScrollView>
      <Header 
        name={pokemon.name}
        types={pokemon.types}
        id={pokemon.id}
        image={pokemon.sprites.other['official-artwork'].front_default}
        order={pokemon.order}
      />
    </ScrollView>
  );
}