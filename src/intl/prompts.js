import inquirer from "inquirer";
import { MY_PROMPTS } from "../prompts/question.js";


export async function selectLanguage() {
    const userInput = await inquirer.prompt(MY_PROMPTS.languageSelectionPrompt);
    return userInput.selectedLanguage;
}