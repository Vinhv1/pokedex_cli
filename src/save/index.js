import fs from "fs/promises"
import path from "path"

export async function theData(pokemon, selectedOptions) {
    if(selectedOptions.includes("abilities")){
        await saveAbilities(pokemon.getAbilities(), pokemon.getName());
    }
    if(selectedOptions.includes("evolution-chain")){
        await saveEvolutionChain(pokemon.getEvolutionChain(), pokemon.getName());
    }
    if(selectedOptions.includes("stats")){
        await saveStats(pokemon.getStats(), pokemon.getName());
    }
    if(selectedOptions.includes("official-artwork")){
        await saveArtWork(await pokemon.getArtwork(), pokemon.getName());
    }
}

export async function createFolder(name) {
    const folderName = path.join(process.cwd(), name);

    try {
        await fs.mkdir(folderName);
        console.log(`Folder ${folderName} created`);
    } catch (err) {
        if (err.code === 'EEXIST') {      
            console.log(`Folder ${folderName} already exists`);
        } else {
            throw err;
        }
    }
}

async function saveToFile(data, filename) {
    const filePath = path.join(process.cwd(), filename);
    const jsonData = JSON.stringify(data, null, 2);

    try {
        await fs.writeFile(filePath, jsonData);
    } catch (err) {
        console.error(`Error writing file ${filePath}`, err);
    }
}

async function saveAbilities(abilities, fileName) {
    await saveToFile(abilities, `${fileName}/abilities.json`);
    console.log(`Abilities saved to ${fileName}/abilities.json`);
}

export async function saveStats(stats, fileName) {
    await saveToFile(stats, `${fileName}/stats.json`);
    console.log(`Stats saved to ${fileName}/stats.json`);
}

export async function saveArtWork(artwork, fileName) {
    const filePath = path.join(process.cwd(), `${fileName}/artwork.png`);
    await fs.writeFile(filePath, Buffer.from(artwork));
    console.log(`Artwork saved to ${filePath}`);
}

export async function saveEvolutionChain(evolutionChain, fileName) {
    await saveToFile(evolutionChain, `${fileName}/evolutionChain.json`);
    console.log(`Evolution chain saved to ${fileName}/evolutionChain.json`);
}




// const theData = async (pokeApiJson, selectedOptions, evolutionChainJson) => {
//     await createFolder(pokeApiJson.name);
//     if(selectedOptions.includes("abilities")){
//         await saveAbilities(pokeApiJson.abilities, pokeApiJson.name);
//     }
//     if(selectedOptions.includes("evolution-chain")){
//         await saveEvolutionChain(evolutionChainJson, pokeApiJson.name);
//     }
//     if(selectedOptions.includes("stats")){
//         await saveStats(pokeApiJson.stats, pokeApiJson.name);
//     }
//     // if(selectedOptions.includes("sprites")){
//     //     await saveSprites(pokeApiJson.sprites, pokeApiJson.name);
//     // }
//     if(selectedOptions.includes("official-artwork")){
//         await saveArtWork(pokeApiJson.sprites, pokeApiJson.name);
//     }
// }


// const createFolder = async (folderName) => {
//     const folderPath = path.join(process.cwd(), folderName);
//     try {
//         await fs.mkdir(folderPath);
//     } catch (error) {
//         if (error.code === "EEXIST") {
//             console.log(`Folder ${folderName} already exists`);
//         } else {
//             console.log(error);
//         }
//     }
// }


// const saveAbilities = async (abilitiesJson, folderName) => {
//     const filePath = path.join(process.cwd(), folderName, "abilities.txt");
//     let ab = ""
//     try {
//         for (const abilities of abilitiesJson)
//         {
//             ab += abilities.ability.name + "\n"
//         }
//         // console.log(ab)
//         await fs.writeFile(filePath, ab);
//         // console.log(`Abilities saved to ${filePath}`);
//     }
//     catch (error) {
//         console.log(error);
//     }
// }


// const saveEvolutionChain = async (evolutionChainJson, folderName) => {
//     let heading = "This is the evolution chain from base form to final form\n\n"
//     let evolutions = evolutionChainJson.chain.species.name + "\n" + evolutionChainJson.chain.evolves_to[0].species.name + "\n" + evolutionChainJson.chain.evolves_to[0].evolves_to[0].species.name;
//     let evolution_chain = heading + evolutions;
//     // console.log(evolution_chain)
//     try {
//         const filePath = path.join(process.cwd(), folderName, "evolution_chain.txt");
//         await fs.writeFile(filePath, evolution_chain);
//         // console.log(`Evolution chain saved to ${filePath}`);
//     }
//     catch (error) {
//         console.log(error);
//     }

// }


// const saveStats = async (statsJson, folderName) => {
//     const filePath = path.join(process.cwd(), folderName, "stats.txt");
//     let stats = ""
//     try {
//         for (const stat of statsJson)
//         {
//             stats += stat.stat.name + " : " + stat.base_stat + "\n"
//             // console.log(typeof stat.base_stat)
//             // console.log("------------")
//             // console.log(typeof stats)
//         }
//         // console.log(typeof stats)

//         // console.log(stats)
//         await fs.writeFile(filePath, stats);
//         // console.log(`Stats saved to ${filePath}`);
//     }
//     catch (error) {
//         console.log(error);
//     }
// }

// const saveArtWork = async (spritesJson, folderName) => {
//     const filePath = path.join(process.cwd(), folderName, "official-artwork.png");
//     const url = spritesJson.other["official-artwork"].front_default;
//     const reqArtWork = await fetch(url);
//     const artWork = await reqArtWork.arrayBuffer();
//     await fs.writeFile(filePath, Buffer.from(artWork));
// }



// const saveSprites = async (spritesJson, folderName) => {

       
// }


// export { theData } ;