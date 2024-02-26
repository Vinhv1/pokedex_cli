class Pokemon {
    constructor(name, abilities, stats, sprites, evolutionChain, artwork) {
        this.name = name;
        this.abilities = abilities;
        this.stats = stats;
        this.sprites = sprites;
        this.evolutionChain = evolutionChain;
        this.artwork = artwork;
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

    getEvolutionChain() {
        return this.evolutionChain;
    }

    getArtwork() {
        return this.artwork;
    }
}

export default Pokemon;