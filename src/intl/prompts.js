import inquirer from "inquirer";
import { MY_QUESTIONS } from "../prompts/questions/index.js";


export async function selectLanguage() {
    const userInput = await inquirer.prompt(MY_QUESTIONS.languageSelectionPrompt);
    if (!userInput) {
        throw new Error("ERRORS_INVALID_LANGUAGE");
    }
    return userInput.selectedLanguage;
}