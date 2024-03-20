import { PROMPTS, askTopic } from "./src/prompts/index.js";
import { fetchEvolutionChain, fetchEvolutionHelper } from "./src/fetch/index.js";
import { createFolder } from "./src/save/index.js";

//Imports for pokemons
import { getMyPokemon } from "./src/pokemon/apiWrapperUtils.js";
import pokemonFactory from "./src/pokemon/pokemonFactory.js";

// Language imports
import { selectLanguage } from "./src/prompts/index.js";
import INTL_SINGLETON from "./src/intl/index.js";


console.log("================ Welcome to the POKEMON DEX CLI ================");

async function start() {
  const selectedLanguagePromise = selectLanguage();
  const selectedLanguage = await selectedLanguagePromise;
  // console.log(selectedLanguage);
  
  INTL_SINGLETON.setLanguage(selectedLanguage);

  while (true) {
    try {
      const getChoice = await askTopic()
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
        
      }
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
    const anotherPokemon = await PROMPTS.pokemon.askForAnotherPokemon();
    if (anotherPokemon === false) {
      break;
    }
  }
}

start();


// doar name parameter in class, ✅
// hardening the code , error handling and error messages
// refactor the code,
// multi souce - add digimon


// vezi in singleton translate and getMessage - au cam aceeasi functie combina-le

// crearea de fisiere si foldere (intr-un modul separat)
// language peste tot
// functie parametrizata
// remaparea erorilor
