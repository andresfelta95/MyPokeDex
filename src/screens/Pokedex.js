import React, { useEffect, useState } from 'react';
import {SafeAreaView } from 'react-native';
import { getPokemonsApi, getPokemonDetailsApi } from "../api/pokemon";
import PokemonList from "../components/PokemonList";

export default function Pokemon() {
  const [pokemons, setPokemons] = useState([]);
  const [nextPageUrl, setNextPageUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      await loadPokemons();
    })();
  }, []);

  const  loadPokemons = async () => {
    try {
      // Return if loading
      if (loading) return null;
      // Get pokemons
      const response = await getPokemonsApi(nextPageUrl);
      // Set loading to true
      setLoading(true);
      // Set next page url
      setNextPageUrl(response.next);
      // Get pokemons details
      const pokemonList = [];
      for await (const pokemon of response.results) {
        const pokemonDetails = await getPokemonDetailsApi(pokemon.url);

        pokemonList.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          types: pokemonDetails.types[0].type.name,
          order: pokemonDetails.order,
          image: pokemonDetails.sprites.other['official-artwork'].front_default,
        });
      }

      setPokemons([...pokemons, ...pokemonList]);
      setLoading(false);
    } catch (error) {
      console.log('loadPokemon', error);
    }
  };
  return (
    <SafeAreaView style={{ backgroundColor: '#159' }}>
      <PokemonList 
        pokemons={pokemons} 
        loadPokemons={loadPokemons}
        isNext={nextPageUrl}
      />
    </SafeAreaView>
  );
}
