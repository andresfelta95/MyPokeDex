import * as React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Favorite(props) {
    const { id } = props;
    const addFavorite = () => {
        console.log('Add favorite pokemon ', id);
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
