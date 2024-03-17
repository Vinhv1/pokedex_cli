import { askForPokemon, askInfoToDownload, askForAnotherPokemon } from "./src/prompts/index.js";
import { fetchEvolutionChain, fetchEvolutionHelper } from "./src/fetch/index.js";
import { createFolder } from "./src/save/index.js";

//Imports for pokemons
import { getMyPokemon } from "./src/pokemon/apiWrapperUtils.js";
import pokemonFactory from "./src/pokemon/pokemonFactory.js";

// Language imports
import { selectLanguage } from "./src/prompts/index.js";
import INTL_SINGLETON from "./src/intl/index.js";

// copilot chat - continua implementarea, e bine foloseste-l
// copilot sa il intreb cum facem cu erorile si sa refacem language selection feature

console.log("================ Welcome to the POKEMON DEX CLI ================");

async function start() {
  const selectedLanguagePromise = selectLanguage();
  const selectedLanguage = await selectedLanguagePromise;
  // console.log(selectedLanguage);
  
  INTL_SINGLETON.setLanguage("fr");

  while (true) {
    try {

      const pokemonName = await askForPokemon();
      const pokemon = pokemonFactory.createPokemon(pokemonName);
      await pokemon.populatePokemon();

      // console.log(pokemoJson);
      const pokemonInfo = await askInfoToDownload();

      // console.log(pokemonInfo);
      await createFolder(pokemonName);
      await pokemon.serializePokemon(pokemonInfo);
      
    } catch (error) {
      if (error.message === "Failed to fetch pokemon") {
        console.error(INTL_SINGLETON.translate("INVALID_POKEMON"));
        continue;
    } else if (error.message === "INVALID_EVOLUTION_CHAIN") {
        console.error(INTL_SINGLETON.translate("INVALID_EVOLUTION_CHAIN"));
        continue;
    } else {
        throw error;
    }
    }
    const anotherPokemon = await askForAnotherPokemon();
    if (anotherPokemon === false) {
      break;
    }
  }
}

start();

// vezi in singleton translate and getMessage - au cam aceeasi functie combina-le

// crearea de fisiere si foldere (intr-un modul separat)
// language peste tot
// functie parametrizata
// remaparea erorilor
