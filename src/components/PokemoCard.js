import * as React from 'react';
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import getColorByPokemonType from '../utils/getColorByPokemonType';

export default function PokemonCard(props) {
    const { pokemon } = props;

    const pokemonColor = getColorByPokemonType(pokemon.types);
    const bgStyles = { ...styles.bgStyle, backgroundColor: pokemonColor };
    const pokeName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

    const goToPokemon = () => {
        console.log('goToPokemon -> pokemon', pokemon);
    };

    return (
        <TouchableWithoutFeedback onPress={goToPokemon}>
            <View style={styles.card}>
                <View style={styles.spacing}>
                    <View style={bgStyles}>
                        <Text style={styles.id}>
                            #{`00${pokemon.id}`.slice(-3)}
                        </Text>
                        <Text style={styles.name}>
                            {pokeName}
                        </Text>
                        <Image
                            source={{ uri: pokemon.image }}
                            style={styles.image}
                        />
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        height: 130,
    },
    spacing: {
        flex: 1,
        padding: 5,
    },
    bgStyle: {
        flex: 1,
        borderRadius: 15,
        padding: 10,
    },
    image: {
        position: 'absolute',
        bottom: 2,
        right: 2,
        width: 90,
        height: 90,
    },
    name: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: 10,
    },
    id: {
        position: 'absolute',
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
        right: 10,
        top: 10,
    },
});