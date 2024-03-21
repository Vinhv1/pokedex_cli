import { LANGUAGES } from "../../intl/language.js";



export const MY_DIGIMON_QUESTIONS = {
    digimonNameQuestion: (selectedLanguage) => ({
        type: "input",
        prefix: "🍙",
        name: "digimon",
        message: LANGUAGES[selectedLanguage].PROMPT_ASK_DIGIMON,
    }),
}