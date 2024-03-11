import { fetchArtwork } from "../fetch/index.js";

class Pokemon {
    constructor(name, abilities, stats, evolutionChain, artwork) {
        this.name = name;
        this.abilities = this.getAbilities(abilities);
        this.stats = this.getStats(stats);
        this.evolutionChain = this.getEvolutionChain(evolutionChain);
        this.artwork = artwork;
    }
    getName() {
        return this.name;
    }

    getAbilities(abilities) {
        return abilities.map(ability => ability.ability.name);
    }

    getStats(stats) {
        const statsObject = {};
        for (const stat of stats) {
            statsObject[stat.stat.name] = stat.base_stat;
        }
        return statsObject;
    }

    getEvolutionChain(evolutionChain) {
        const evolutionChainArray = [];
        let currentStage = evolutionChain.chain;
        while (currentStage !== undefined && currentStage !== null) {
            evolutionChainArray.push(currentStage.species.name);
            currentStage = currentStage.evolves_to[0];
        }
        return evolutionChainArray;

    }

    async getArtwork() {
        const artworkResponse = await fetchArtwork(this.artwork);
        return artworkResponse;
    }

    async populatePokemon() {
        const pokemonJson = await getMyPokemon(pokemonName);
      // console.log(pokemonName);
        const evolutionUrl = await fetchEvolutionHelper(pokemonName);
        const evolutionChainJson = await fetchEvolutionChain(evolutionUrl);
    }

    // async serializePokemon() {
    //     if(selectedOptions.includes(intlSingleton.translate("abilities"))){
    //         await saveToFile(this.abilities, `${this.name}/${intlSingleton.translate("abilities")}.json`);
    //     }
    //     if(selectedOptions.includes(intlSingleton.translate("evolution-chain"))){
    //         await saveToFile(this.evolutionChain, `${pokemonName}/${intlSingleton.translate("evolution-chain")}.json`);
    //     }
    //     if(selectedOptions.includes(intlSingleton.translate("stats"))){
    //         await saveToFile(pokemon.stats, `${pokemonName}/${intlSingleton.translate("stats")}.json`);
    //     }
    //     if(selectedOptions.includes(intlSingleton.translate("official-artwork"))){
    //         const artwork = await pokemon.getArtwork();
    //         await saveImage(artwork, `${pokemonName}/${intlSingleton.translate("official-artwork")}.png`);
    //     }
    // }

}


export default Pokemon;

/** The reason for using both a Pokemon class and a PokemonFactory is to separate the concerns of your code.
 *  The Pokemon class is concerned with what a Pokemon object is and what it can do,
 *  while the PokemonFactory is concerned with how to create Pokemon objects.
 *  This separation of concerns can make your code more modular, easier to maintain, and easier to understand. */