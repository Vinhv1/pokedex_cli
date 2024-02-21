import inquirer from "inquirer";
import { theData } from "./save-pokemon.js";
import { MY_PROMPTS } from "./question.js";
import { LANGUAGES } from "./language.js";
import { fetchPokemon } from "./fetching-data.js";



export async function selectLanguage() {
    const userInput = await inquirer.prompt(MY_PROMPTS.languageSelectionPrompt);
    return userInput.selectedLanguage;
}

export async function askForPokemon (selectedLanguage) {

    let userInput = await inquirer.prompt(MY_PROMPTS.namePrompt(selectedLanguage));
    // console.log(userInput, userInput.pokemon, typeof userInput, typeof userInput.pokemon);
    if(typeof userInput !== "object" || typeof userInput.pokemon !== "string" )
    {
        throw new Error("InvalidPokemon")
    }
    const pokemonName = userInput.pokemon;
    // userInput = null;
    // const pokemonName = userInput?.pokemon ?? "";

    // console.log(pokemonName);
    return pokemonName;
}

export async function askInfoToDownload (selectedLanguage) {
    const userInput = await inquirer.prompt(MY_PROMPTS.infoPrompt(selectedLanguage));
    if (!userInput.info_pokemon || userInput.info_pokemon.length === 0) {
        throw new Error("InvalidInfo");
    }
    const info = userInput.info_pokemon;
    // console.log(info)
    return info;
}

export async function askForAnotherPokemon (selectedLanguage) {
    const userInput = await inquirer.prompt(MY_PROMPTS.anotherPokemonPrompt(selectedLanguage));
    let anotherPokemon = userInput.anotherPokemon;
    return anotherPokemon;

}

// const askForPokemon = async (language) => {

//     let userInput = await inquirer.prompt(MY_PROMPTS(language).namePrompt);
//     // console.log(userInput, userInput.pokemon, typeof userInput, typeof userInput.pokemon);
//     if(typeof userInput !== "object" || typeof userInput.pokemon !== "string" )
//     {
//         throw new Error("InvalidPokemon")
//     }
//     const pokemonName = userInput.pokemon;
//     // userInput = null;
//     // const pokemonName = userInput?.pokemon ?? "";

//     // console.log(pokemonName);
//     return pokemonName;
// }

// const askInfoToDownload = async (language) => {
//     const userInput = await inquirer.prompt(LANGUAGES[language].infoPrompt);
//     if (!userInput.info_pokemon || userInput.info_pokemon.length === 0) {
//         throw new Error("InvalidInfo");
//     }
//     const info = userInput.info_pokemon;
//     // console.log(info)
//     return info;
// }


// const askForAnotherPokemon = async (language) => {
//     const userInput = await inquirer.prompt(LANGUAGES[language].askForAnotherPokemon);
//     let anotherPokemon = userInput.anotherPokemon;
//     return anotherPokemon;
// }


// ---------------------------------------------------------
// const prompts = async () => {
//     console.log("Welcome to the Pokemon API");
//     const selectedLanguage = await selectLanguage();
//     // const language = LANGUAGES[selectedLanguage] || LANGUAGES.en;
//     console.log(selectedLanguage);

//     while(true) {

//         const pokemonName = await askForPokemon(selectedLanguage);
//         if(pokemonName === ""){
//             console.log("You must enter a valid pokemon name");
//             continue;
//         }
//         const pokemonJson = await fetchPokemon(pokemonName);
//         // console.log(await pokemonJson);
//         const info = await askInfoToDownload(selectedLanguage);
//         // console.log(await info);
//         await theData(pokemonJson, info)
//         const anotherPokemon = await askForAnotherPokemon(selectedLanguage);
//         if(anotherPokemon === false) {
//             break;
//         }
//     }        
// }





// mapam toate errorile si intrebarile in alt fisier in constante (obj sau map)
// pentru error ce e mai bine sa folosim? (map set(pt errori dar dc vino cu argument) obiect)
// map vs object
// mutation pe obiecte
// language selector (ro si eng)
// factory pattern cand primim rsp de la api clasa pentru pokemon



// cosnst CAPS - se foloseste pentru constante care sunt cunoscute inainte de executie
// const camelCase - se foloseste pentru constante care se calculeaza in timpul executiei, iar valoarea lor nu se schimba
// null(data type) - valoare care nu exista, reprezinta nimic
// undefined(data type) - valoare care nu a fost initializata
// === - checks the equality without type conversion. It returns true if the operands are equal and of the same type.
//  Comparisons convert null to a number, treating it as 0.
//  a chain of OR || returns the first truthy value or the last one if no truthy value is found.




