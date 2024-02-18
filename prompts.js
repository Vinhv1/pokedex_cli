import inquirer from "inquirer";
import { theData } from "./save-pokemon.js";
import { MY_PROMPTS } from "./question.js";
import { LANGUAGES } from "./language.js";



async function selectLanguage() {
    const userInput = await inquirer.prompt(MY_PROMPTS.languageSelection);
    return userInput.slectedLanguage;

}

async function fetchPokemon(pokemonName) {
    const reqPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
    return await reqPokemon.json();
}

const askForPokemon = async () => {

    let userInput = await inquirer.prompt(MY_PROMPTS.namePrompt);
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

const askInfoToDownload = async () => {
    const userInput = await inquirer.prompt(MY_PROMPTS.infoPrompt);
    if (!userInput.info_pokemon || userInput.info_pokemon.length === 0) {
        throw new Error("InvalidInfo");
    }
    const info = userInput.info_pokemon;
    // console.log(info)
    return info;
}


const askForAnotherPokemon = async () => {
    const userInput = await inquirer.prompt(MY_PROMPTS.anotherPokemonPrompt);
    let anotherPokemon = userInput.anotherPokemon;
    return anotherPokemon;
}

const prompts = async () => {

    const selectedLanguage = await selectLanguage();
    const language = LANGUAGES[selectedLanguage] || LANGUAGES.en;
    console.log(language);

    while(true) {

        const pokemonName = await askForPokemon();
        if(pokemonName === ""){
            console.log("You must enter a valid pokemon name");
            continue;
        }
        const pokemonJson = await fetchPokemon(pokemonName);
        // console.log(await pokemonJson);
        const info = await askInfoToDownload();
        // console.log(await info);
        await theData(pokemonJson, info)
        const anotherPokemon = await askForAnotherPokemon();
        if(anotherPokemon === false) {
            break;
        }
    }        
}

prompts();

export default prompts;
export { fetchPokemon };  



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




