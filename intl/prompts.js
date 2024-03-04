import inquirer from "inquirer";
import { MY_PROMPTS } from "../question.js";


export async function selectLanguage() {
    const userInput = await inquirer.prompt(MY_PROMPTS.languageSelectionPrompt);
    return userInput.selectedLanguage;
}