import * as React from 'react';
import { SafeAreaView, Text, StyleSheet, Image, View } from 'react-native';
import getColorByPokemonType from '../../utils/getColorByPokemonType';

export default function Header(props) {
    const { 
        name,
        types,
        id,
        image,
        order
    } = props;

    // Get a color by pokemon type
    const colors = [];
    for (let i = 0; i < types.length; i++) {
        type = types[i].type.name;
        color = getColorByPokemonType(type);
        colors.push(color);
    }
    
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ ...styles.bgStyle, backgroundColor: colors[0] }} />
            <Text style={styles.name}>
                {name.charAt(0).toUpperCase() + name.slice(1)}
            </Text>
            <Text style={styles.id}>
                #{`00${id}`.slice(-3)}
            </Text>
            <Text style={styles.order}>
                Order: {order}
            </Text>
            <Image
                source={{ uri: image }}
                style={styles.image}
            />
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
        </SafeAreaView>
    );
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bgStyle: {
        position: 'absolute',
        width: '100%',
        height: 600,
        borderBottomLeftRadius: 300,
        borderBottomRightRadius: 300,
        shadowRadius: 300,
        shadowColor: '#000',
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 0 },
        elevation: 5,
        transform: [
            { scaleX: 2 }
        ],
    },
    name: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
        color: 'white',
    },
    id: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
    },
    order: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
    },
    image: {
        width: 400,
        height: 400,
        alignSelf: 'center',
        marginTop: 10,
    },
    types: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
        borderColor: 'silver',
        borderWidth: 1,
        borderRadius: 30,
        paddingVertical: 5,
        paddingHorizontal: 10,
        shadowColor: '#000',
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 0 },
        elevation: 5,
    },
    type: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 30,
        shadowColor: '#000',
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 0 },
        elevation: 5,
    },
});