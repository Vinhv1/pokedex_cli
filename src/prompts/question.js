// export const MY_MAP = new Map();
// MY_MAP.set("namePrompt", {
//     type: "input",
//     name: "pokemon",
//     message: "What pokemon do you want to research?",
// })

import { LANGUAGES } from "../intl/language.js";
import IntlSingleton from "../intl/index.js";


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
    test: (selectedLanguage) => ({
        type: "list",
        prefix: "🍙",
        name: "mainChoice",
        message: LANGUAGES[selectedLanguage].PROMPT_ASK_TOPIC,
        choices: [
            {
                name: "Pokemon",
                value: "pokemon"
            },
            {
                name: "Digimon",
                value: "digimon"
            }
        ]
    }),
    namePrompt: (selectedLanguage) => ({
        type: "input",
        prefix: "🍙",
        name: "pokemon",
        message: LANGUAGES[selectedLanguage].enterPokemonName,
    }),
    infoPrompt: (selectedLanguage) => ({
        type: "checkbox",
        prefix: "🍙",
        name: "info_pokemon",
        message: LANGUAGES[selectedLanguage].infoPrompt,
        choices: [
            {
                name: IntlSingleton.translate("abilities"),
            },
            {
                name: IntlSingleton.translate("evolution-chain"),
            },
            {
                name: IntlSingleton.translate("stats"),
            },
            {
                name: IntlSingleton.translate("official-artwork")
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



