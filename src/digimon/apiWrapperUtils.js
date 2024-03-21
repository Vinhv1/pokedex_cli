import { fetchEntity } from "../fetch/index.js";


const BASE_URL = "https://digi-api.com/api/v1/digimon";

export const getMyDigimon = (digimonName) => {
    return fetchEntity(`${BASE_URL}`, digimonName.toLowerCase(), "digimon");
}