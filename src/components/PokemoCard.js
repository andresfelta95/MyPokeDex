import * as React from 'react';
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';

export default function PokemonCard(props) {
    const { pokemon } = props;

    const goToPokemon = () => {
        console.log('goToPokemon -> pokemon', pokemon);
    };

    return (
        <TouchableWithoutFeedback onPress={goToPokemon}>
            <View style={styles.card}>
                <View style={styles.spacing}>
                    <View style={styles.bgStyle}>
                        <Text style={styles.id}>
                            #{`00${pokemon.id}`.slice(-3)} - {pokemon.types}
                        </Text>
                        <Text style={styles.name}>
                            {pokemon.name}
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
        backgroundColor: '#f8f',
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
        fontSize: 30,
        fontWeight: 'bold',
        paddingTop: 10,
    },
    id: {
        position: 'absolute',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        right: 10,
        top: 10,
    },
});