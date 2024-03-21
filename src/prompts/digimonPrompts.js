import inquirer from "inquirer";
import { MY_DIGIMON_QUESTIONS } from "./questions/digimonQuestion.js";
import intlSingleton from '../intl/index.js';

export async function askForDigimon() {
    let userInput = await inquirer.prompt(MY_DIGIMON_QUESTIONS.digimonNameQuestion(intlSingleton.getLanguage()));
    console.log(userInput.digimon);
    if(typeof userInput !== "object" || typeof userInput.digimon !== "string" )
    {
        throw new Error("INVALID_DIGIMON");
    }
    return userInput.digimon;
}