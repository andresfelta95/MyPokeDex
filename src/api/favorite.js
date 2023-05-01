import AsyncStorage from "@react-native-async-storage/async-storage";

// Key to store favorite pokemon
import { FAVORITE_STORAGE } from "../utils/constants";

// Add a pokemon to favorite list
export async function addPokemonToFavoriteApi(pokemonId) {
  try {
    // Get favorite pokemon list
    const favoritePokemons = await getFavoritePokemonsApi();

    // If there is no favorite pokemon list
    if (!favoritePokemons) {
        // Create a new list with the new pokemon
        await AsyncStorage.setItem(
            FAVORITE_STORAGE,
            JSON.stringify([pokemonId])
        );
        return;
        }

    // If there is a favorite pokemon list
    // Convert the list to an array
    const favoritePokemonsArray = JSON.parse(favoritePokemons);

    // Check if the pokemon is already in the list
    const index = favoritePokemonsArray.indexOf(pokemonId);

    // If the pokemon is already in the list
    if (index > -1) {
        // Remove the pokemon from the list
        favoritePokemonsArray.splice(index, 1);
    }
    // If the pokemon is not in the list
    else {
        // Add the pokemon to the list
        favoritePokemonsArray.push(pokemonId);
    }

    // Save the new list
    await AsyncStorage.setItem(
        FAVORITE_STORAGE,
        JSON.stringify(favoritePokemonsArray)
    );
  } catch (error) {
    console.log(error);
    throw error;
  }
}

// Get favorite pokemon list
export async function getFavoritePokemonsApi() {
    try {
        const response = await AsyncStorage.getItem(FAVORITE_STORAGE);
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

