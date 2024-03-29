// class Pokemon {
//     constructor(name, abilities, evolutionChain, stats, officialArtwork) {
//         this.name = name;
//         this.abilities = abilities;
//         this.evolutionChain = evolutionChain;
//         this.stats = stats;
//         this.officialArtwork = officialArtwork;
//     }
// }

import Pokemon from './pokemonClass.js';

// class PokemonFactory {
//     createPokemon(pokemonApiJson, evolutionChainJson) {
//         // console.log(data);
//         return new Pokemon(
//             pokemonApiJson.name,
//             pokemonApiJson.abilities,
//             pokemonApiJson.stats,
//             evolutionChainJson,
//             pokemonApiJson.sprites.other['official-artwork'].front_default,
//         );
//     }
// }

class PokemonFactory {
    createPokemon(pokemonName) {
        return new Pokemon(pokemonName);
    }
}

// export default new - deoarece creeaza o instanta a clasei, iar cand o folosim in alt fisier
// nu mai trebuie sa o instantiem din nou, si o folosim direct
export default new PokemonFactory();