

// async function fetchPokemon(pokemonName) {
//     const reqPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
//     return await reqPokemon.json();
// }

export async function fetchPokemon(pokemonName) {
    if (!pokemonName) {
      throw new Error("InvalidPokemon");
    }
  
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
  
    if (!response.ok) {
      throw new Error(`Failed to fetch Pokemon: ${response.statusText}`);
    }
  
    return await response.json();
  }


export async function fetchEvolutionChain(pokemonName) {
    const reqPokeSpecies = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonName.toLowerCase()}`);
    const pokemonSpecies = await reqPokeSpecies.json();
    const url = pokemonSpecies.evolution_chain.url;
    const reqEvolution = await fetch(url);
    const evolutionChain = await reqEvolution.json();
    return evolutionChain
}