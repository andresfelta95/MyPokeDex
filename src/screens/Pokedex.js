import React, { useEffect, useState } from 'react';
import {SafeAreaView, Text, } from 'react-native';
import { getPokemon, getPokemonDetailsApi } from "../api/pokemon";

export default function Pokemon() {
  const [pokemons, setPokemons] = useState(null);
  console.log('pokemons', pokemons);
  useEffect(() => {
    (async () => {
      await loadPokemon();
    })();
  }, []);

  const  loadPokemon = async () => {
    try {
      const response = await getPokemon();
      console.log('response', response);
      const pokemonList = [];
      for await (const pokemon of response.results) {
        const pokemonDetails = await getPokemonDetailsApi(pokemon.url);
        pokemonList.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          types: pokemonDetails.types[0].type.name,
          order: pokemonDetails.order,
          image: pokemonDetails.sprites.other.dream_world.front_default,
          stats: pokemonDetails.stats,
        });

      }

      setPokemons([...pokemons, ...pokemonList]);
      
    } catch (error) {
      console.log('loadPokemon', error);
    }
  };
  return (
    <SafeAreaView>
      <Text>Pokedex Page 🧑🏽‍💻</Text>
    </SafeAreaView>
  );
}
