import { LANGUAGES } from "../../intl/language.js";
import IntlSingleton from "../../intl/index.js";


export const MY_QUESTIONS = {
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
    
    askTopicQuestion: (selectedLanguage) => ({
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
}
