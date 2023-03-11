import React, { useEffect, useState } from 'react';
import {SafeAreaView } from 'react-native';
import { getPokemon, getPokemonDetailsApi } from "../api/pokemon";
import PokemonList from "../components/PokemonList";

export default function Pokemon() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    (async () => {
      await loadPokemon();
    })();
  }, []);

  const  loadPokemon = async () => {
    try {
      const response = await getPokemon();
      console.log(response.results);

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
    } catch (error) {
      console.log('loadPokemon', error);
    }
  };
  return (
    <SafeAreaView>
      <PokemonList pokemons={pokemons} />
    </SafeAreaView>
  );
}
