import fs from "fs/promises"
import path from "path"
import { fetchEvolutionChain } from "./fetching-data";

const theData = async (pokeApiJson, selectedOptions) => {
    await createFolder(pokeApiJson.name);
    if(selectedOptions.includes("abilities")){
        await saveAbilities(pokeApiJson.abilities, pokeApiJson.name);
    }
    if(selectedOptions.includes("evolution-chain")){
        await saveEvolutionChain(pokeApiJson.name);
    }
    if(selectedOptions.includes("stats")){
        await saveStats(pokeApiJson.stats, pokeApiJson.name);
    }
    // if(selectedOptions.includes("sprites")){
    //     await saveSprites(pokeApiJson.sprites, pokeApiJson.name);
    // }
    if(selectedOptions.includes("official-artwork")){
        await saveArtWork(pokeApiJson.sprites, pokeApiJson.name);
    }
}


const createFolder = async (folderName) => {
    const folderPath = path.join(process.cwd(), folderName);
    try {
        await fs.mkdir(folderPath);
    } catch (error) {
        if (error.code === "EEXIST") {
            console.log(`Folder ${folderName} already exists`);
        } else {
            console.log(error);
        }
    }
}



const saveAbilities = async (abilitiesJson, folderName) => {
    const filePath = path.join(process.cwd(), folderName, "abilities.txt");
    let ab = ""
    try {
        for (const abilities of abilitiesJson)
        {
            ab += abilities.ability.name + "\n"
        }
        // console.log(ab)
        await fs.writeFile(filePath, ab);
        // console.log(`Abilities saved to ${filePath}`);
    }
    catch (error) {
        console.log(error);
    }
}




const saveEvolutionChain = async (pokemonName) => {
    // const reqPokeSpecies = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonName.toLowerCase()}`);
    // const pokemonSpecies = await reqPokeSpecies.json();
    // const url = pokemonSpecies.evolution_chain.url;
    // console.log(url)
    // const reqEvolution = await fetch(url);
    // const evolutionChain = await reqEvolution.json();
    const evolutionChain = await fetchEvolutionChain(pokemonName)
    let heading = "This is the evolution chain from base form to final form\n\n"
    let evolutions = evolutionChain.chain.species.name + "\n" + evolutionChain.chain.evolves_to[0].species.name + "\n" + evolutionChain.chain.evolves_to[0].evolves_to[0].species.name;
    let evolution_chain = heading + evolutions;
    // console.log(evolution_chain)
    try {
        const filePath = path.join(process.cwd(), pokemonName, "evolution_chain.txt");
        await fs.writeFile(filePath, evolution_chain);
        // console.log(`Evolution chain saved to ${filePath}`);
    }
    catch (error) {
        console.log(error);
    }

}


const saveStats = async (statsJson, folderName) => {
    const filePath = path.join(process.cwd(), folderName, "stats.txt");
    let stats = ""
    try {
        for (const stat of statsJson)
        {
            stats += stat.stat.name + " : " + stat.base_stat + "\n"
        }
        // console.log(stats)
        await fs.writeFile(filePath, stats);
        // console.log(`Stats saved to ${filePath}`);
    }
    catch (error) {
        console.log(error);
    }
}

const saveArtWork = async (spritesJson, folderName) => {
    const filePath = path.join(process.cwd(), folderName, "official-artwork.png");
    const url = spritesJson.other["official-artwork"].front_default;
    const reqArtWork = await fetch(url);
    const artWork = await reqArtWork.arrayBuffer();
    await fs.writeFile(filePath, Buffer.from(artWork));
}


const saveSprites = async (spritesJson, folderName) => {

       
}


export { theData } ;