import { ERROR_MESSAGES } from "../errors/index.js";
import { getMyPokemonSpecies } from "../pokemon/apiWrapperUtils.js";


// export const BASE_URL = "https://pokeapi.co/api/v2/";

// TEMA 1: abstractizarea conceptelor de pokemon din fisierul asta

// fetchEntity(fromUrl, entityName)
export async function fetchEntity(fromUrl, entityName, test) {
    const response = await fetch(`${fromUrl}/${entityName}`);
    if (!response.ok) {
      throw new Error(`ERRORS_FETCH_${test.toUpperCase()}`);
    }
    return response.json();
  }

export async function fetchArtwork(artworkUrl) {
    const reqArtwork = await fetch(artworkUrl);
    const artwork = await reqArtwork.arrayBuffer();
    const officialArt = Buffer.from(artwork);
    return officialArt;
}


export async function fetchEvolutionChain(url) {
    const reqEvolution = await fetch(url);
    const evolutionChain = await reqEvolution.json();
    return evolutionChain
}

// aici

export async function fetchEvolutionHelper(fromUrl, entityName) {
    const reqPokeSpecies = await fetch(`${fromUrl}/${entityName}`);
    const pokeSpeciesJson = await reqPokeSpecies.json();
    return pokeSpeciesJson.evolution_chain.url;
}

// export async function fetchEvolutionHelper(pokemonName) {
//     const reqPokeSpecies = await fetch(`${BASE_URL}pokemon-species/${pokemonName.toLowerCase()}`);
//     const pokeSpeciesJson = await reqPokeSpecies.json();
//     return pokeSpeciesJson.evolution_chain.url;
// }

// async function fetchPokemonSpecies(pokemonName) {
//     const reqPokeSpecies = await fetch(`${BASE_URL}pokemon-species/${pokemonName.toLowerCase()}`);
//     return reqPokeSpecies.json();  
// }
