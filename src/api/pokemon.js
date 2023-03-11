import { API_HOST } from "../utils/constants";

export async function getPokemon() {
  try {
    const url = `${API_HOST}/pokemon?limit=20&offset=0`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log("getPokemon", error);
    return null;
  }
}

export async function getPokemonDetailsApi(url) {
  try {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log("getPokemonDetailsApi", error);
    return null;
  }
}