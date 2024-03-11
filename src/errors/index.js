import intlSingleton  from "../intl/index.js";

export const ERROR_MESSAGES = new Map();

ERROR_MESSAGES.set("INVALID_POKEMON", () => 
    intlSingleton.translate("INVALID_POKEMON")
);

ERROR_MESSAGES.set("INVALID_EVOLUTION_CHAIN", () => 
    intlSingleton.translate("INVALID_EVOLUTION_CHAIN")
);