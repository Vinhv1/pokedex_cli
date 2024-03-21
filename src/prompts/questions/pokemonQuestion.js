// export const MY_MAP = new Map();
// MY_MAP.set("namePrompt", {
//     type: "input",
//     name: "pokemon",
//     message: "What pokemon do you want to research?",
// })

import { LANGUAGES } from "../../intl/language.js";
import IntlSingleton from "../../intl/index.js";


export const MY_POKEMON_QUESTIONS = {
    pokemonNameQuestion: (selectedLanguage) => ({
        type: "input",
        prefix: "🍙",
        name: "pokemon",
        message: LANGUAGES[selectedLanguage].PROMPT_ASK_POKEMON,
    }),
    downloadQuestion: (selectedLanguage) => ({
        type: "checkbox",
        prefix: "🍙",
        name: "info_pokemon",
        message: LANGUAGES[selectedLanguage].PROMPT_ASK_DOWNLOAD,
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
    anotherPokemonQuestion: (selectedLanguage) => ({
        type: "confirm",
        prefix: "🍙",
        default: false,
        name: "anotherPokemon",
        message: LANGUAGES[selectedLanguage].PROMPT_ASK_ANOTHER_POKEMON,
    })

};



