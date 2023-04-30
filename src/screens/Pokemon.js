import * as React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { getPokemonDetailsByIdApi } from '../api/pokemon';
//  Import components
import Header from '../components/Pokemon/Header';
import Types from '../components/Pokemon/Types';
import Stats from '../components/Pokemon/Stats';

export default function Pokemon(props) {
  const { navigation, route } = props;
  const {id} = route.params;

  const [pokemon, setPokemon] = React.useState(null);

  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Icon
          name="heart"
          color="#fff"
          size={30}
          style={{ marginRight: 20 }}
          backgroundColor="transparent"
          onPress={() => {console.log('Add to favorites')}}
        />
      ),
      headerLeft: () => (
        <Icon
          name="arrow-left"
          color="#fff"
          size={30}
          style={{ marginLeft: 20 }}
          onPress={navigation.goBack}
        />
      ),
    });
  }, [navigation, route.params]);

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
    <ScrollView style={styles.container}>
      <Header 
        name={pokemon.name}
        types={pokemon.types}
        id={pokemon.id}
        image={pokemon.sprites.other['official-artwork'].front_default}
        order={pokemon.order}
      />
      <Types
        types={pokemon.types}
      />
      <Stats
        stats={pokemon.stats}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#357',
  },
});