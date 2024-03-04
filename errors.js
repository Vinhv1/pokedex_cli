import intlSingleton  from "./intl/index.js";

export const ERROR_MESSAGES = new Map();

ERROR_MESSAGES.set("INVALID_POKEMON", () => 
    intlSingleton.getMessage("INVALID_POKEMON")
);
