import * as React from 'react';
import { StyleSheet, Text, FlatList } from 'react-native';
import { getPokemon } from '../api/pokemon';

export default function PokemonList(props) {
    const { pokemons } = props;

    return (
        <FlatList
            data={pokemons}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            keyExtractor={(pokemon) => pokemon.id.toString()}
            renderItem={({ item }) => (
                <Text>{item.name}</Text>
            )}
            contentContainerStyle={styles.flatListContainer}
        />
    );
}

const styles = StyleSheet.create({
    flatListContainer: {
        paddingHorizontal: 5,
    },
});
