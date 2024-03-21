import inquirer from "inquirer";
import { MY_QUESTIONS } from "../prompts/questions/index.js";


export async function selectLanguage() {
    const userInput = await inquirer.prompt(MY_QUESTIONS.languageSelectionPrompt);
    return userInput.selectedLanguage;
}