import Digimon from "./digimonClass.js";

class DigimonFactory {
    createDigimon(digimonName) {
        return new Digimon(digimonName);
    }
}

export default new DigimonFactory();