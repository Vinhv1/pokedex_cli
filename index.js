import { PROMPTS, askTopic } from "./src/prompts/index.js";
import { fetchEvolutionChain, fetchEvolutionHelper } from "./src/fetch/index.js";
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
  const selectedLanguagePromise = selectLanguage();
  const selectedLanguage = await selectedLanguagePromise;
  // console.log(selectedLanguage);
  
  INTL_SINGLETON.setLanguage(selectedLanguage);

  while (true) {
    try {
      let getChoice = await askTopic()
      if(getChoice === "pokemon") {
        const pokemonName = await PROMPTS.pokemon.askForPokemon();
        const pokemon = pokemonFactory.createPokemon(pokemonName);
        await pokemon.populatePokemon();

        // console.log(pokemoJson);
        const pokemonInfo = await PROMPTS.pokemon.askInfoToDownload();

        // console.log(pokemonInfo);
        await createFolder(pokemonName);
        await pokemon.serializePokemon(pokemonInfo);
      } else if(getChoice === "digimon"){
        console.log("digimon soon to come");
        const digimonName = await PROMPTS.digimon.askForDigimon();
        const digimon = await getMyDigimon(digimonName);
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
    const anotherPokemon = await PROMPTS.pokemon.askForAnotherPokemon();
    if (anotherPokemon === false) {
      break;
    }
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
