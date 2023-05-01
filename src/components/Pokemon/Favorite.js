import * as React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
// Api
import { addPokemonToFavoriteApi, getFavoritePokemonsApi } from '../../api/favorite';
import { View } from 'react-native';

export default function Favorite(props) {
    const { id } = props;
    const addFavorite = async () => {
        await addPokemonToFavoriteApi(id);
        console.log('Pokemon added to favorite');
    }
    return (
        <Icon
        name="heart"
        color='#fff'
        size={30}
        onPress={addFavorite}
        style={{ marginRight: 20 }}
        />
    );
}
