import { selectLanguage, askForPokemon, askInfoToDownload, askForAnotherPokemon } from "./prompts.js";
import { fetchPokemon, fetchEvolutionChain } from "./fetching-data.js"; 
import { theData, createFolder } from "./save-pokemon.js";
import pokemonFactory from './pokemonFactory.js';

// copilot chat - continua implementarea, e bine foloseste-l
// copilot sa il intreb cum facem cu erorile si sa refacem language selection feature


console.log("================ Welcome to the POKEMON DEX CLI ================")

async function start() {

    const selectedLanguagePromise = selectLanguage();
    const selectedLanguage = await selectedLanguagePromise;
    // console.log(selectedLanguage);

    while (true) {
        const pokemonName = await askForPokemon(selectedLanguage);
        // console.log(pokemonName);
        const pokemonJson = await fetchPokemon(pokemonName);
        const evolutionChainJson = await fetchEvolutionChain(pokemonName)
        const pokemon = pokemonFactory.createPokemon(pokemonJson, evolutionChainJson);
        console.log(pokemon);
        // console.log(pokemoJson);
        const pokemonInfo = await askInfoToDownload(selectedLanguage);
        // console.log(pokemonInfo);
        await createFolder(pokemon.getName());
        await theData(pokemon, pokemonInfo, evolutionChainJson)
        const anotherPokemon = await askForAnotherPokemon(selectedLanguage);
        if(anotherPokemon === false) {
            break;
        }
    }
}


start()