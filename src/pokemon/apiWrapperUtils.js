import { fetchEntity, fetchEvolutionHelper } from "../fetch/index.js";

const BASE_URL = "https://pokeapi.co/api/v2";

export const getMyPokemon = (pokemonName) => {
    return fetchEntity(`${BASE_URL}/pokemon`, pokemonName.toLowerCase(), "pokemon");
}

export const getMyPokemonSpecies = (pokemonName) => {
    return fetchEvolutionHelper(`${BASE_URL}/pokemon-species`, pokemonName.toLowerCase());
}

// si aici sa trec sa harden