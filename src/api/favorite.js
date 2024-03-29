import AsyncStorage from "@react-native-async-storage/async-storage";

// Key to store favorite pokemon
import { FAVORITE_STORAGE } from "../utils/constants";

// Add or remove a pokemon in the favorite list
export async function addPokemonToFavoriteApi(pokemonId) {
  try {
    // Get favorite pokemon list
    const favoritePokemons = await getFavoritePokemonsApi();

    // If there is no favorite pokemon list
    if (!favoritePokemons) {
        // Create a new list
        await AsyncStorage.setItem(
            FAVORITE_STORAGE,
            JSON.stringify([pokemonId])
        );
        return;
    }
    // Check if the pokemon is in the list
    const index = favoritePokemons.indexOf(pokemonId);

    // If the pokemon is not in the list
    if (index === -1) {
        // Add the pokemon to the list
        favoritePokemons.push(pokemonId);
        // Update the list
        await AsyncStorage.setItem(
            FAVORITE_STORAGE,
            JSON.stringify(favoritePokemons)
        );
    }
    // If the pokemon is in the list
    else {
        // Remove the pokemon from the list
        await removePokemonFromFavoriteApi(pokemonId);
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
}

// Get favorite pokemon list
export async function getFavoritePokemonsApi() {
    try {
        // Get the list
        const favoritePokemons = await AsyncStorage.getItem(FAVORITE_STORAGE);
        console.log(favoritePokemons);
        // Return the list
        return JSON.parse(favoritePokemons);
    } catch (error) {
        console.log(error);
        throw error;
    }
}

// Check if a pokemon is in the favorite list
export async function isPokemonFavoriteApi(pokemonId) {
    try {
        // Get favorite pokemon list
        const favoritePokemons = await getFavoritePokemonsApi();

        // If there is no favorite pokemon list
        if (!favoritePokemons) {
            return false;
        }

        // Check if the pokemon is in the list
        const index = favoritePokemons.indexOf(pokemonId);

        // If the pokemon is in the list
        if (index > -1) {
            return true;
        }
        // If the pokemon is not in the list
        else {
            return false;
        }

    } catch (error) {
        console.log(error);
        throw error;
    }
}

// Remove a pokemon from the favorite list
export async function removePokemonFromFavoriteApi(pokemonId) {
    try {
        // Get favorite pokemon list
        const favoritePokemons = await getFavoritePokemonsApi();

        // If there is no favorite pokemon list
        if (!favoritePokemons) {
            return;
        }

        // Check if the pokemon is in the list
        const index = favoritePokemons.indexOf(pokemonId);

        // If the pokemon is in the list
        if (index > -1) {
            // Remove the pokemon from the list
            favoritePokemons.splice(index, 1);
        }
        // If the pokemon is not in the list
        else {
            return;
        }

        // Save the new list
        await AsyncStorage.setItem(
            FAVORITE_STORAGE,
            JSON.stringify(favoritePokemons)
        );
    } catch (error) {
        console.log(error);
        throw error;
    }
}

