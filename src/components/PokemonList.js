import * as React from 'react';
import { StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import PokemonCard from "./PokemoCard";

export default function PokemonList(props) {
    const { pokemons, loadPokemons, isNext } = props;

    // Function to load more pokemons
    const loadMorePokemons = () => {
        loadPokemons();
    }

    return (
        <FlatList
            data={pokemons}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            keyExtractor={(pokemon) => pokemon.id.toString()}
            renderItem={({ item }) => <PokemonCard pokemon={item} />}
            contentContainerStyle={styles.flatListContainer}
            onEndReached={isNext && loadMorePokemons}
            onEndReachedThreshold={0.1}
            ListFooterComponent={
                isNext && (
                    <ActivityIndicator 
                        size="large"
                        style={styles.spinner}
                        color="#AEAEAE"
                    />
                )
        }
        />
    );
}

const styles = StyleSheet.create({
    flatListContainer: {
        paddingHorizontal: 5,
    },
    spinner: {
        marginTop: 20,
        marginBottom: 60,
    },
});
