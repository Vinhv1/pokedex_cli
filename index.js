import { PROMPTS, askTopic } from "./src/prompts/index.js";
import { createFolder } from "./src/save/index.js";

//Imports for pokemons
import { getMyPokemon } from "./src/pokemon/apiWrapperUtils.js";
import pokemonFactory from "./src/pokemon/pokemonFactory.js";

import { handleError } from "./src/errors/index.js";
// Language imports
import { selectLanguage } from "./src/prompts/index.js";
import INTL_SINGLETON from "./src/intl/index.js";
import { getMyDigimon } from "./src/digimon/apiWrapperUtils.js";

console.log("================ Welcome to the POKEMON DEX CLI ================");

async function start() {
  try {
    const selectedLanguagePromise = selectLanguage();
    const selectedLanguage = await selectedLanguagePromise;
    if (!selectedLanguage) {
      throw new Error("ERRORS_INVALID_LANGUAGE");
    }
    INTL_SINGLETON.setLanguage(selectedLanguage);

    while (true) {
      let getChoice = await askTopic();
      if (!getChoice) {
        throw new Error("ERRORS_INVALID_TOPIC");
      }
      if (getChoice === "pokemon") {
        const pokemonName = await PROMPTS.pokemon.askForPokemon();
        if (!pokemonName) {
          throw new Error("ERRORS_INVALID_POKEMON");
        }

        const pokemon = pokemonFactory.createPokemon(pokemonName);
        await pokemon.populatePokemon();

        const pokemonInfo = await PROMPTS.pokemon.askInfoToDownload();
        if (!pokemonInfo) {
          throw new Error("ERRORS_INVALID_POKEMON_INFO");
        }

        await createFolder(pokemonName);
        await pokemon.serializePokemon(pokemonInfo);
        const anotherPokemon = await PROMPTS.pokemon.askForAnotherPokemon();
        if (anotherPokemon === false) {
          break;
        }
      } else if (getChoice === "digimon") {
        console.log("digimon soon to come");
        const digimonName = await PROMPTS.digimon.askForDigimon();
        const digimon = await getMyDigimon(digimonName);
      }
    }
  } catch (error) {
    const errorMessage = handleError(error.message);
    console.error(errorMessage);
    //   if (error.message === "Failed to fetch pokemon") {
    //     console.error(INTL_SINGLETON.translate("ERRORS_FETCH_POKEMON"));
    //     continue;
    // }else if(error.message === "Failed to fetch digimon"){
    //   console.error(INTL_SINGLETON.translate("ERRORS_FETCH_DIGIMON"));
    //   continue;
    // }
    // else if (error.message === "INVALID_EVOLUTION_CHAIN") {
    //     console.error(INTL_SINGLETON.translate("INVALID_EVOLUTION_CHAIN"));
    //     continue;
    // } else {
    //     throw error;
    // }
  }
}

start();

// doar name parameter in class, ✅
// hardening the code , error handling and error messages
// refactor the code, - done cat de cat
// multi souce - add digimon - done cat de cat

// vezi in singleton translate and getMessage - au cam aceeasi functie combina-le

// crearea de fisiere si foldere (intr-un modul separat)
// language peste tot
// functie parametrizata
// remaparea erorilor
