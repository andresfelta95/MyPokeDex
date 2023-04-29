import * as React from 'react';
import { SafeAreaView, Text, StyleSheet, Image, View } from 'react-native';
import getColorByPokemonType from '../../utils/getColorByPokemonType';

export default function Types(props) {
    const { 
        types
    } = props;

    // Get a color by pokemon type
    const colors = [];
    for (let i = 0; i < types.length; i++) {
        type = types[i].type.name;
        color = getColorByPokemonType(type);
        colors.push(color);
    }
    
    return (
        <SafeAreaView style={styles.types}>
            {types.map((type, index) => {
                return (
                    <Text
                        key={index}
                        style={{ ...styles.type, backgroundColor: colors[index] }}
                    >
                        {type.type.name}
                    </Text>                        
                );
            })}
        </SafeAreaView>
    );
    }

const styles = StyleSheet.create({
    types: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        top: -25,
        left: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    type: {
        paddingHorizontal: 30,
        paddingVertical: 5,
        borderRadius: 20,
        marginHorizontal: 10,
        color: 'white',
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontSize: 20,
        shadowColor: '#000',
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 0 },
        elevation: 5,
        borderColor: 'silver',
        borderWidth: 1,
    },
});