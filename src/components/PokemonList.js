import * as React from 'react';
import { StyleSheet, Text, FlatList } from 'react-native';
import PokemonCard from "./PokemoCard";

export default function PokemonList(props) {
    const { pokemons } = props;

    return (
        <FlatList
            data={pokemons}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            keyExtractor={(pokemon) => pokemon.id.toString()}
            renderItem={({ item }) => <PokemonCard pokemon={item} />}
            contentContainerStyle={styles.flatListContainer}
        />
    );
}

const styles = StyleSheet.create({
    flatListContainer: {
        paddingHorizontal: 5,
    },
});
