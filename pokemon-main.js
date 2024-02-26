import { selectLanguage, askForPokemon, askInfoToDownload, askForAnotherPokemon } from "./prompts.js";
import { fetchPokemon } from "./fetching-data.js"; 
import { theData } from "./save-pokemon.js";
import pokemonFactory from './pokemonFactory.js';


console.log("================ Welcome to the POKEMON DEX CLI ================")

async function start() {

    const selectedLanguagePromise = selectLanguage();
    const selectedLanguage = await selectedLanguagePromise;
    // console.log(selectedLanguage);

    while (true) {
        const pokemonName = await askForPokemon(selectedLanguage);
        // console.log(pokemonName);
        const pokemonJson = await fetchPokemon(pokemonName);
        const pokemon = pokemonFactory.createPokemon(pokemonJson);
        console.log(pokemon);
        // console.log(pokemoJson);
        const pokemonInfo = await askInfoToDownload(selectedLanguage);
        // console.log(pokemonInfo);
        await theData(pokemonJson, pokemonInfo)
        const anotherPokemon = await askForAnotherPokemon(selectedLanguage);
        if(anotherPokemon === false) {
            break;
        }
    }
}


start()