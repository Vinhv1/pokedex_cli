import { selectLanguage, askForPokemon, askInfoToDownload, askForAnotherPokemon } from "./prompts.js";
import { fetchPokemon } from "./fetching-data.js"; 


console.log("================ Welcome to the POKEMON DEX CLI ================")

async function start() {

    const selectedLanguagePromise = selectLanguage();
    const selectedLanguage = await selectedLanguagePromise;
    console.log(selectedLanguage);

    while (true) {
        const pokemonName = await askForPokemon(selectedLanguage);
        console.log(pokemonName);
        const pokemoJson = await fetchPokemon(pokemonName);
        // console.log(pokemoJson);
        const pokemonInfo = await askInfoToDownload();
        // console.log(pokemonInfo);
        const anotherPokemon = await askForAnotherPokemon();
        if(anotherPokemon === false) {
            break;
        }
    }
}


start()