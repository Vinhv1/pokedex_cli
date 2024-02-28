class Pokemon {
    constructor(name, abilities, stats, sprites, evolutionChain, artwork) {
        this.name = name;
        this.abilities = abilities;
        this.stats = stats;
        this.sprites = sprites;
        // this.evolutionChain = evolutionChain;
        this.artwork = artwork;
    }
    getName() {
        return this.name;
    }

    getAbilities() {
        return this.abilities;
    }

    getStats() {
        return this.stats;
    }

    getSprites() {
        return this.sprites;
    }

    // getEvolutionChain() {
    //     return this.evolutionChain;
    // }

    getArtwork() {
        return this.artwork;
    }

}


export default Pokemon;

/** The reason for using both a Pokemon class and a PokemonFactory is to separate the concerns of your code.
 *  The Pokemon class is concerned with what a Pokemon object is and what it can do,
 *  while the PokemonFactory is concerned with how to create Pokemon objects.
 *  This separation of concerns can make your code more modular, easier to maintain, and easier to understand. */