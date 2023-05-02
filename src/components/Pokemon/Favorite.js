import * as React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
// Api
import { addPokemonToFavoriteApi, isPokemonFavoriteApi } from '../../api/favorite';

export default function Favorite(props) {
    const { id } = props;
    const [isfavorite, setIsFavorite] = React.useState(false);
    const [color, setColor] = React.useState('#fff');


    const addFavorite = async () => {
        // Add the pokemon to the favorite list
        await addPokemonToFavoriteApi(id);
        // Check if the pokemon is already in the favorite list
        const response = await isPokemonFavoriteApi(id);
        setIsFavorite(response);
    }

    React.useEffect(() => {
        (async () => {
            try {
                const response = await isPokemonFavoriteApi(id);
                console.log(response);
                setIsFavorite(response);
                // If the pokemon is already in the favorite list
                if (isfavorite) {
                    // Set the heart color to red
                    setColor('#F44336');
                }
                // If the pokemon is not in the favorite list
                else {
                    // Set the heart color to white
                    setColor('#fff');
                }
            }
            catch (error) {
                console.log(error);
                setIsFavorite(false);
            }
        })()
    }, [id, isfavorite ])

    return (
        <Icon
        name="heart"
        solid={isfavorite}
        color={color}
        size={40}
        onPress={addFavorite}
        style={{ marginRight: 40 }}
        />
    );
}
