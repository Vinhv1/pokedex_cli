import inquirer from "inquirer";
import { MY_POKEMON_QUESTIONS } from "./questions/pokemonQuestion.js";
import intlSingleton from '../intl/index.js';



export async function askForPokemon () {
    let userInput = await inquirer.prompt(MY_POKEMON_QUESTIONS.pokemonNameQuestion(intlSingleton.getLanguage()));
    if(typeof userInput !== "object" || typeof userInput.pokemon !== "string" )
    {
        throw new Error("INVALID_POKEMON");
    }
    const pokemonName = userInput.pokemon;
    return pokemonName;
}

export async function askInfoToDownload () {
    const userInput = await inquirer.prompt(MY_POKEMON_QUESTIONS.downloadQuestion(intlSingleton.getLanguage()));
    if (!userInput.info_pokemon || userInput.info_pokemon.length === 0) {
        throw new Error("InvalidInfo");
    }
    const info = userInput.info_pokemon;
    return info;
}

export async function askForAnotherPokemon () {
    const userInput = await inquirer.prompt(MY_POKEMON_QUESTIONS.anotherPokemonQuestion(intlSingleton.getLanguage()));
    let anotherPokemon = userInput.anotherPokemon;
    return anotherPokemon;

}