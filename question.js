// export const MY_MAP = new Map();
// MY_MAP.set("namePrompt", {
//     type: "input",
//     name: "pokemon",
//     message: "What pokemon do you want to research?",
// })


export const MY_PROMPTS = {
    languageSelection: {
        type: "list",
        default: "en",
        name: "slectedLanguage",
        message: "Select a language",
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
    namePrompt: {
        type: "input",
        name: "pokemon",
        message: "What pokemon do you want to research?",
    },
    infoPrompt:{
        type: "checkbox",
        name: "info_pokemon",
        message: "What info do you want to download?",
        choices: [
            {
                name: "abilities",
            },
            {
                name: "evolution-chain",
            },
            {
                name: "stats",
            },
            {
                name: "sprites",
            },
            {
                name: "official-artwork"
            }         
        ]
    },
    anotherPokemonPrompt:{
        type: "confirm",
        default: false,
        name: "anotherPokemon",
        message: "Do you want to research another pokemon?",
    }

};



