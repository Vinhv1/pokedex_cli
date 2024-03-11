import { LANGUAGES } from './language.js';

const LANGUAGE_SET = ["en","ro","es"];

class MyIntlSingleton {

    constructor(selectedLanguage)
    {
        if(!LANGUAGE_SET.includes(selectedLanguage)){
            this.selectedLanguage = "en";
            return;
        }
        this.selectedLanguage = selectedLanguage;
    }

    setLanguage(selectedLanguage) {
        if(!LANGUAGE_SET.includes(selectedLanguage)){
            this.selectedLanguage = "en";
            return;
        }
        this.selectedLanguage = selectedLanguage;
    }

    getLanguage() {
        return this.selectedLanguage;
    }

    translate(message) {
        const translations = LANGUAGES[this.selectedLanguage];
        return translations[message] || message;
    }

    // getMessage(messageId){
    //     const messages = LANGUAGES[this.selectedLanguage]
    //     const message = messages[messageId];
    //     if (!message) {
    //         throw new Error(`No message found for ID: ${messageId}`);
    //     }
    //     return message;
    // }
    //getmeessage, id de mesaj, return string de la id, in limba care trb
}

export default new MyIntlSingleton("en");



// cand o resursa e share uita in entire program (lang, db, auth token, user data)