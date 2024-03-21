import intlSingleton  from "../intl/index.js";

export function handleError(errorID) {
    const errorMessage = ERROR_MESSAGES.get(errorID);
    if (!errorMessage) {
        throw new Error("Unknown error for now! I'll figure it out in a sec");
    }
    return errorMessage();
}


export const ERROR_MESSAGES = new Map();

ERROR_MESSAGES.set("ERRORS_FETCH_POKEMON", () => 
    intlSingleton.translate("ERRORS_FETCH_POKEMON")
);

ERROR_MESSAGES.set("ERRORS_FETCH_DIGIMON", () => 
    intlSingleton.translate("ERRORS_FETCH_DIGIMON")
);

ERROR_MESSAGES.set("ERRORS_INVALID_TOPIC", () => 
    intlSingleton.translate("ERRORS_INVALID_TOPIC")
);

ERROR_MESSAGES.set("ERRORS_INVALID_POKEMON", () => 
    intlSingleton.translate("ERRORS_INVALID_POKEMON")
);

ERROR_MESSAGES.set("ERRORS_INVALID_POKEMON_INFO", () => 
    intlSingleton.translate("ERRORS_INVALID_POKEMON_INFO")
);

ERROR_MESSAGES.set("ERRORS_INVALID_LANGUAGE", () => 
    intlSingleton.translate("ERRORS_INVALID_LANGUAGE")
);