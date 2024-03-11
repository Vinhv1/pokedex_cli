import { askForPokemon, askInfoToDownload, askForAnotherPokemon } from "./src/prompts/index.js";
import { fetchEvolutionChain, fetchEvolutionHelper } from "./src/fetch/index.js";
import { saveData, createFolder } from "./src/save/index.js";

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
  
  INTL_SINGLETON.setLanguage("fr");

  while (true) {
    try {

      const pokemonName = await askForPokemon();
      const pokemonJson = await getMyPokemon(pokemonName);
      // console.log(pokemonName);
      const evolutionUrl = await fetchEvolutionHelper(pokemonName);
      const evolutionChainJson = await fetchEvolutionChain(evolutionUrl);
      const pokemon = pokemonFactory.createPokemon(pokemonJson, evolutionChainJson);
      console.log(pokemon);
      // console.log(pokemoJson);
      const pokemonInfo = await askInfoToDownload();
      // console.log(pokemonInfo);
      await createFolder(pokemon.getName());
      await saveData(pokemonName, pokemon, pokemonInfo);
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


// doar name parameter in class, hardening the code,



// vezi in singleton translate and getMessage - au cam aceeasi functie combina-le

// crearea de fisiere si foldere (intr-un modul separat)
// language peste tot
// functie parametrizata
// remaparea erorilor
