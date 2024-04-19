import { getMyDigimon } from "./apiWrapperUtils.js";
import { saveToFile, saveImage } from "../save/index.js";
import intlSingleton from "../intl/index.js";

class Digimon {
    constructor(name) {
        this.name = name;
    }

    setLevel(levels) {
        this.levels = levels.map(level => level.level);
    }

    setType(types) {
        this.types = types.map(type => type.type);
    }

    setAttribute(attributes) {
        this.attributes = attributes.map(attribute => attribute.attribute);
    }

    setArtwork() {

    }

    async populate() {
        const digimonJson = await getMyDigimon(this.name);
        console.log("here")
        this.setLevel(digimonJson.levels);
        this.setType(digimonJson.types);
        this.setAttribute(digimonJson.attributes);
        // this.setArtwork(await fetchArtwork(this.name));
    }

    async serialize(selectedOptions) {
        if(selectedOptions.includes(intlSingleton.translate("level"))){
            await saveToFile(this.levels, `${this.name}/${intlSingleton.translate("level")}.json`);
        }
        if(selectedOptions.includes(intlSingleton.translate("type"))){
            await saveToFile(this.types, `${this.name}/${intlSingleton.translate("types")}.json`);
        }
        if(selectedOptions.includes(intlSingleton.translate("attribute"))){
            await saveToFile(this.attributes, `${this.name}/${intlSingleton.translate("attributes")}.json`);
        }
        // if(selectedOptions.includes(intlSingleton.translate("official-artwork"))){
        //     await saveImage(this.artwork, `${this.name}/${intlSingleton.translate("official-artwork")}.png`);
        // }
    }
}

export default Digimon;