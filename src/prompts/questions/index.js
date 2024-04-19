import { LANGUAGES } from "../../intl/language.js";
import IntlSingleton from "../../intl/index.js";

const downloadOptions = {
    pokemon: ['abilities', 'stats', 'evolution-chain', 'official-artwork'],
    digimon: ['level', 'type', 'official-artwork', 'attribute'],
};

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
    askEntityName: (selectedLanguage, selectedEntity) => ({
        type: "input",
        prefix: "🍙",
        name: "entity",
        message: LANGUAGES[selectedLanguage][`PROMPT_ASK_${selectedEntity.toUpperCase()}`],
    }),
    askDownloadOptions: (selectedLanguage, selectedEntity) => ({
        type: "checkbox",
        prefix: "🍙",
        name: "downloadOptions",
        message: LANGUAGES[selectedLanguage].PROMPT_ASK_DOWNLOAD,
        choices: downloadOptions[selectedEntity].map(option => ({name: IntlSingleton.translate(option),}))
    }),
}
