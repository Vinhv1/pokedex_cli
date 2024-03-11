import { fetchEntity } from "../fetch/index.js";

export const BASE_URL = "https://pokeapi.co/api/v2";

export const getMyPokemon = (pokemonName) => {
    console.log("Trec pe aici")
    return fetchEntity(`${BASE_URL}/pokemon`, pokemonName.toLowerCase());
}

export const getMyPokemonSpecies = (pokemonName) => {
    return fetchEntity(`${BASE_URL}/pokemon-species`, pokemonName.toLowerCase());
}