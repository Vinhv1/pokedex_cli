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

class PokemonFactory {
    createPokemon(data) {
        return new Pokemon(
            data.name,
            data.abilities,
            data.stats,
            data.sprites,
            data.evolutionChain,
            data.artwork
        );
    }
}

// export default new - deoarece creeaza o instanta a clasei, iar cand o folosim in alt fisier
// nu mai trebuie sa o instantiem din nou, si o folosim direct
export default new PokemonFactory();