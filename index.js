import { askForPokemon, askInfoToDownload, askForAnotherPokemon } from "./src/prompts/index.js";
import { fetchPokemon, fetchEvolutionChain } from "./src/fetch/index.js"; 
import { theData, createFolder } from "./src/save/index.js";
import pokemonFactory from "./src/pokemon/pokemonFactory.js";
import { selectLanguage }  from "./src/prompts/index.js";
import intlSingleton from './src/intl/index.js';

// copilot chat - continua implementarea, e bine foloseste-l
// copilot sa il intreb cum facem cu erorile si sa refacem language selection feature


console.log("================ Welcome to the POKEMON DEX CLI ================")

async function start() {

    const selectedLanguagePromise = selectLanguage();
    const selectedLanguage = await selectedLanguagePromise;
    // console.log(selectedLanguage);
    intlSingleton.setLanguage(selectedLanguage);

    while (true) {
        const pokemonName = await askForPokemon();
        // console.log(pokemonName);
        const pokemonJson = await fetchPokemon(pokemonName);
        const evolutionChainJson = await fetchEvolutionChain(pokemonName)
        const pokemon = pokemonFactory.createPokemon(pokemonJson, evolutionChainJson);
        // console.log(pokemon);
        // console.log(pokemoJson);
        const pokemonInfo = await askInfoToDownload();
        // console.log(pokemonInfo);
        await createFolder(pokemon.getName());
        await theData(pokemon, pokemonInfo, evolutionChainJson)
        const anotherPokemon = await askForAnotherPokemon();
        if(anotherPokemon === false) {
            break;
        }
    }
}


start()

// crearea de fisiere si foldere (intr-un modul separat)
// language peste tot
// functie parametrizata
// remaparea erorilor