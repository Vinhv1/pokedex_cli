import { fetchEntity, fetchEvolutionHelper } from "../fetch/index.js";

export const BASE_URL = "https://pokeapi.co/api/v2";

export const getMyPokemon = (pokemonName) => {
    console.log("Trec pe aici")
    return fetchEntity(`${BASE_URL}/pokemon`, pokemonName.toLowerCase());
}

export const getMyPokemonSpecies = (pokemonName) => {
    console.log("Trec pe aici 2")
    return fetchEvolutionHelper(`${BASE_URL}/pokemon-species`, pokemonName.toLowerCase());
}