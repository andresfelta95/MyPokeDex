import * as React from 'react';
import {SafeAreaView, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
// Api
import { getFavoritePokemonsApi } from '../api/favorite';
// Hooks
import useAuth from '../hooks/useAuth';
// Screens
import Account from './Account';


export default function Favorites() { 
  const navigation = useNavigation();
  const { auth } = useAuth();

  // Check if the user is logged in
  if (!auth) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>
          You must be logged in to see your favorites
        </Text>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('Account')}
        >
          <Text
            style={styles.buttonText}
          >
            Go to login
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
  const checkFavorite = async () => {
    const response = await getFavoritePokemonsApi();
    console.log(response);
  }

  // If the user is logged in  
  return (
    <SafeAreaView style={styles.container}>
      <Text>Favorites</Text>
      <TouchableOpacity onPress={checkFavorite}>
        <Text
          style={styles.text}
        >
          Get favorites.
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#357',
    height: '100%',
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 40,
    fontSize: 18,
  },
  button: {
    backgroundColor: '#0098d3',
    padding: 10,
    borderRadius: 20,
    width: '50%',
    alignSelf: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  },
});