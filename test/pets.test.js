const petsModel = require("../src/models/petsModel")

describe("GET route test", () => {
    const pets = new petsModel({

        "name": "Marley",
        "species": "cachorro",
        "gender": "masculino",
        "age": "8 meses",
        "disabilityOrIllness": [
            "deficiente visual"
        ],
        "descriptiondisabilityOrIllness": "Ele é cego dos dois olhos devido à uma má formação.",
        "status": "disponível",
        "neutered": false,
        "wormed": true,
        "vaccinated": true,
        "size": "porte médio",
        "ongsOrTemporaryHomesId": "62e09adeca201c49f6472732",
        "responsible": "Camila",
        "whatsapp": "(81) 99704-6802",
        "email": "camilarp.rec@gmail.com"
    });
    it("Must call the schema and return the correct pet name", () => {
        expect(pets.name).toBe("Marley");
    });
    it("Must call the schema and return the correct pet species", () => {
        expect(pets.species).toBe("cachorro");
    });
    it("Must call the schema and return the correct pet gender", () => {
        expect(pets.gender).toBe("masculino");
    });
    it("It must call the schema and return the correct age of the pet", () => {
        expect(pets.age).toBe("8 meses");
    });
    it("Must call the schema and return the correct pet disability", () => {
        expect(pets.disabilityOrIllness).toStrictEqual(["deficiente visual"]);
    });
    it("It must call the schema and return the description of the correct pet disease", () => {
        expect(pets.descriptiondisabilityOrIllness).toBe("Ele é cego dos dois olhos devido à uma má formação.");
    });
    it("Must call the schema and return the correct pet status", () => {
        expect(pets.status).toBe("disponível");
    });
    it("It must call the schema and return if the pet is neutered correctly", () => {
        expect(pets.neutered).toBe(false);
    });
    it("It must call the schema and return if the pet is wormed correctly", () => {
        expect(pets.wormed).toBe(true);
    });
    it("It must call the schema and return if the pet is vaccinated correctly", () => {
        expect(pets.vaccinated).toBe(true);
    });
    it("Must call the schema and return the correct pet port", () => {
        expect(pets.size).toBe("porte médio");
    });
    it("Must call the schema and return the correct pet ONG or temporary home", () => {
        expect(
            JSON.stringify(pets.ongsOrTemporaryHomesId).substring(
                1,
                JSON.stringify(pets.ongsOrTemporaryHomesId).length - 1
            )
        ).toBe("62e09adeca201c49f6472732");
    });
    it("It must call the schema and return the correct name of the pet responsible", () => {
        expect(pets.responsible).toBe("Camila");
    });
    it("Must call the schema and return the pet's whatsapp", () => {
        expect(pets.whatsapp).toBe("(81) 99704-6802");
    });
    it("Must call the schema and return the pet's whatsapp", () => {
        expect(pets.email).toBe("camilarp.rec@gmail.com");
    });
});

describe("CREATE route test", () => {
    const pets = new petsModel({
        "name": "Marley",
        "species": "cachorro",
        "gender": "masculino",
        "age": "8 meses",
        "disabilityOrIllness": [
            "deficiencia visual"
        ],
        "descriptiondisabilityOrIllness": "Ele é cego dos dois olhos devido à uma má formação.",
        "status": "disponível",
        "neutered": false,
        "wormed": true,
        "vaccinated": true,
        "size": "porte médio",
        "ongsOrTemporaryHomesId": "62e09adeca201c49f6472732",
        "responsible": "Camila",
        "whatsapp": "(81) 99704-6802",
        "email": "camilarp.rec@gmail.com"
    });
    it("You must save the new pet in the database", () => {
        pets.save().then((data) => {
            expect(data.title).toBe("Marley");
        });
    });
})

describe("UPDATE route test", () => {
    it("You must edit the name and save the new pet in the database", () => {
        const pets = new petsModel({
            "name": "Marley",
            "species": "cachorro",
            "gender": "masculino",
            "age": "8 meses",
            "disabilityOrIllness": [
                "deficiencia visual"
            ],
            "descriptiondisabilityOrIllness": "Ele é cego dos dois olhos devido à uma má formação.",
            "status": "disponível",
            "neutered": false,
            "wormed": true,
            "vaccinated": true,
            "size": "porte médio",
            "ongsOrTemporaryHomesId": "62e09adeca201c49f6472732",
            "responsible": "Camila",
            "whatsapp": "(81) 99704-6802",
            "email": "camilarp.rec@gmail.com"
        });
        pets.title = "novo pet"
        pets.save().then((data) => {
            expect(data.name).toBe("novo pet");
        });
    });
})

describe("DELETE route test", () => {
    it("Must delete the new pet", () => {
        const pets = new petsModel({
            "name": "Marley",
            "species": "cachorro",
            "gender": "masculino",
            "age": "8 meses",
            "disabilityOrIllness": [
                "deficiencia visual"
            ],
            "descriptiondisabilityOrIllness": "Ele é cego dos dois olhos devido à uma má formação.",
            "status": "disponível",
            "neutered": false,
            "wormed": true,
            "vaccinated": true,
            "size": "porte médio",
            "ongsOrTemporaryHomesId": "62e09adeca201c49f6472732",
            "responsible": "Camila",
            "whatsapp": "(81) 99704-6802",
            "email": "camilarp.rec@gmail.com"
        });
        pets.save().then((data) => {
            pets.delete().then((newdata) => {
                expect(data.title).toBe(null);
            })
        });

    });
})