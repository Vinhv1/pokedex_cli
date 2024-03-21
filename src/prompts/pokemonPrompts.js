import inquirer from "inquirer";
import { MY_POKEMON_QUESTIONS } from "./questions/pokemonQuestion.js";
import intlSingleton from '../intl/index.js';



export async function askForPokemon () {
    let userInput = await inquirer.prompt(MY_POKEMON_QUESTIONS.pokemonNameQuestion(intlSingleton.getLanguage()));
    if(typeof userInput !== "object" || typeof userInput.pokemon !== "string" )
    {
        throw new Error("ERRORS_INVALID_POKEMON");
    }
    return userInput.pokemon;
}

export async function askInfoToDownload () {
    const userInput = await inquirer.prompt(MY_POKEMON_QUESTIONS.downloadQuestion(intlSingleton.getLanguage()));
    if (!userInput.info_pokemon || userInput.info_pokemon.length === 0) {
        throw new Error("ERRORS_INVALID_INFO");
      }
      return userInput.info_pokemon;
}

export async function askForAnotherPokemon () {
    const userInput = await inquirer.prompt(MY_POKEMON_QUESTIONS.anotherPokemonQuestion(intlSingleton.getLanguage()));
    if (typeof userInput !== "object" || typeof userInput.anotherPokemon !== "string") {
        throw new Error("ERRORS_INVALID_ANOTHER_POKEMON");
      }
    return userInput.anotherPokemon;
}