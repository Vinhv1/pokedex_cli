// export const MY_MAP = new Map();
// MY_MAP.set("namePrompt", {
//     type: "input",
//     name: "pokemon",
//     message: "What pokemon do you want to research?",
// })

import { LANGUAGES } from "./intl/language.js";


export const MY_PROMPTS = {
    languageSelectionPrompt: {
        type: "list",
        prefix: "🍙",
        default: "en",
        name: "selectedLanguage",
        message: "Select a language!",
        choices: [
            {
                name: "English",
                value: "en"
            },
            {
                name: "Romanian",
                value: "ro"
            },
            {
                name: "Spanish",
                value: "es"
            }
        ]
    },
    namePrompt: (selectedLanguage) => {
        // console.log("Selected Language:", selectedLanguage);
        // console.log(LANGUAGES[selectedLanguage])
        // const language = LANGUAGES[selectedLanguage];
        return {
            type: "input",
            prefix: "🍙",
            name: "pokemon",
            message: LANGUAGES[selectedLanguage].enterPokemonName,
        }
    },
    infoPrompt: (selectedLanguage) => ({
        type: "checkbox",
        prefix: "🍙",
        name: "info_pokemon",
        message: LANGUAGES[selectedLanguage].infoPrompt,
        choices: [
            {
                name: "abilities",
            },
            {
                name: "evolution-chain",
            },
            {
                name: "stats",
            },
            {
                name: "official-artwork"
            }         
        ]
    }),
    anotherPokemonPrompt: (selectedLanguage) => ({
        type: "confirm",
        prefix: "🍙",
        default: false,
        name: "anotherPokemon",
        message: LANGUAGES[selectedLanguage].askForAnotherPokemon,
    })

};



