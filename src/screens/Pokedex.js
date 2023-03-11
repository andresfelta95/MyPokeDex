import React, { useEffect, useState } from 'react';
import {SafeAreaView, Text, } from 'react-native';
import { getPokemon } from "../api/pokemon";

export default function Pokemon() {
  useEffect(() => {
    (async () => {
      await loadPokemon();
    })();
  }, []);

  const  loadPokemon = async () => {
    try {
      const response = await getPokemon();
      console.log('response', response);
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
