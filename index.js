import { selectLanguage, askSelectEntity, askForEntityName, askForDownloadOptions } from "./src/prompts/index.js";
import { createFolder } from "./src/save/index.js";

import Pokemon from "./src/pokemon/pokemonClass.js";
import Digimon from "./src/digimon/digimonClass.js";
//Imports for pokemons
import { getMyPokemon } from "./src/pokemon/apiWrapperUtils.js";
import pokemonFactory from "./src/pokemon/pokemonFactory.js";
import digimonFactory from "./src/digimon/digimonFactory.js";

import { handleError } from "./src/errors/index.js";
// Language imports
import INTL_SINGLETON from "./src/intl/index.js";
import { getMyDigimon } from "./src/digimon/apiWrapperUtils.js";

console.log("================ Welcome to the POKEMON DEX CLI ================");

const entityOptions = {
  pokemon: Pokemon,
  digimon: Digimon,
}

async function start() {
  try {
    const selectedLanguagePromise = selectLanguage();
    const selectedLanguage = await selectedLanguagePromise;
    if (!selectedLanguage) {
      throw new Error("ERRORS_INVALID_LANGUAGE");
    }
    INTL_SINGLETON.setLanguage(selectedLanguage);

    while (true) {
      const selectedEntity = await askSelectEntity();
      const entityClass = entityOptions[selectedEntity];
      const entityName = await askForEntityName(selectedEntity);
      const entity = new entityClass(entityName);
      const selectedOptions = await askForDownloadOptions(selectedEntity);
      await entity.populate();
      await createFolder(entityName);
      await entity.serialize(selectedOptions)
      // multi selection with Other
      // top three: pokemon, diginom
      // hidden options: animals, insects

      // Homework - catch this and restart the function
      // Unfortunately we don't recognise this family
      // restart prompt workflow
      // if (!selectedEntity) {
      //   throw new Error("ERRORS_INVALID_TOPIC");
      // }

      
      // if (selectedEntity === "pokemon") {
      //   const pokemonName = await PROMPTS.pokemon.askForPokemon();
      //   console.log(pokemonName);
      //   if (!pokemonName) {
      //     throw new Error("ERRORS_INVALID_POKEMON");
      //   }
      //   const pokemon = pokemonFactory.createPokemon(pokemonName);
      //   await pokemon.populatePokemon();

      //   const pokemonInfo = await PROMPTS.pokemon.askInfoToDownload();
      //   if (!pokemonInfo) {
      //     throw new Error("ERRORS_INVALID_POKEMON_INFO");
      //   }

      //   await createFolder(pokemonName);
      //   await pokemon.serializePokemon(pokemonInfo);
      //   const anotherPokemon = await PROMPTS.pokemon.askForAnotherPokemon();
      //   if (anotherPokemon === false) {
      //     break;
      //   }
      // } else if (selectedEntity === "digimon") {
      //   const digimonName = await PROMPTS.digimon.askForDigimon();
      //   const digimon = digimonFactory.createDigimon(digimonName);
      //   await digimon.populateDigimon();
      //   const digimonInfo = await PROMPTS.digimon.askInfoToDownload();
      //   console.log("im here")
      //   await createFolder(digimonName);
      //   await digimon.serializeDigimon(digimonInfo);


      // }
    }
  } catch (error) {
    const errorMessage = handleError(error.message);
    console.error(errorMessage);
  }
}

start();



      // const MY_CHOICES = {
      //   "pokemon": myPokemonWorkflow
      // };

      // var smth = MY_CHOICES[getChoice]; 

      // // enter bad party you expose your system to
      // MY_CHOICES["pokemon"] = function() {
      //   const badActor = await getRunningPokemonHelper(); // external system
      //   badActor("make my image pretty");

      //   console.log(this);
      //   for (keys in this) {
      //     this[key] = myMalwareFunction();
      //   }
      // }

      // smth(); // execute myMalwareFunction();

      // pokemon runtime




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



// doar name parameter in class, ✅
// hardening the code , error handling and error messages
// refactor the code, - done cat de cat
// multi souce - add digimon - done cat de cat

// vezi in singleton translate and getMessage - au cam aceeasi functie combina-le

// crearea de fisiere si foldere (intr-un modul separat)
// language peste tot
// functie parametrizata
// remaparea erorilor
