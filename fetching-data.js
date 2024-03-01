
const BASE_URL = "https://pokeapi.co/api/v2/";

export async function fetchPokemon(pokemonName) {
    if (!pokemonName) {
      throw new Error("InvalidPokemon");
    }
  
    const response = await fetch(`${BASE_URL}pokemon/${pokemonName.toLowerCase()}`);
  
    if (!response.ok) {
      throw new Error(`Failed to fetch Pokemon: ${response.statusText}`);
    }
  
    return response.json();
  }

export async function fetchArtwork(pokemonName) {
    const pokemonJson = await fetchPokemon(pokemonName);
    const artworkUrl = pokemonJson.sprites.other['official-artwork'].front_default;
    const reqArtwork = await fetch(artworkUrl);
    const artwork = await reqArtwork.arrayBuffer();
    return artwork;
}

export async function fetchEvolutionChain(pokemonName) {
    const speciesJson = await fetchPokemonSpecies(pokemonName);
    const url = speciesJson.evolution_chain.url;
    const reqEvolution = await fetch(url);
    const evolutionChain = await reqEvolution.json();
    return evolutionChain
}


async function fetchPokemonSpecies(pokemonName) {
    const reqPokeSpecies = await fetch(`${BASE_URL}pokemon-species/${pokemonName.toLowerCase()}`);
    return reqPokeSpecies.json();  
}

fetchArtwork("pikachu");