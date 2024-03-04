class MyIntlSingleton {

    constructor(selectedLanguage)
    {
        this.selectedLanguage = selectedLanguage;
    }

    setLanguage(selectedLanguage) {
        this.selectedLanguage = selectedLanguage;
    }

    getLanguage() {
        return this.selectedLanguage;
    }
    //getmeessage, id de mesaj, return string de la id, in limba care trb
}

export default new MyIntlSingleton("en");

// cand o resursa e share uita in entire program (lang, db, auth token, user data)