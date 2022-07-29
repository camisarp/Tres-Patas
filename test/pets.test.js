const petsModel = require("../src/models/petsModel")

describe("GET route test", () => {
    const pets = new petsModel({
        "name": "Marley",
        "species": "cachorro",
        "gender": "masculino",
        "age": "9 meses",
        "disabilityOrIllness": [
            "deficiencia visual"
        ],
        "description": "Ele é cego dos dois olhos devido à uma má formação.",
        "status": "disponível",
        "neutered": false,
        "wormed": true,
        "vaccinated": true,
        "size": "porte medio",
        "ongsOrTemporaryHomesId": "62e3e7761d576f3ae4befb39"
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
        expect(pets.age).toBe("9 meses");
    });
    it("Must call the schema and return the correct pet disability", () => {
        expect(pets.disabilityOrIllness).toStrictEqual(["deficiencia visual"]);
    });
    it("It must call the schema and return the description of the correct pet disease", () => {
        expect(pets.description).toBe("Ele é cego dos dois olhos devido à uma má formação.");
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
        expect(pets.size).toBe("porte medio");
    });
});

describe("CREATE route test", () => {
    const pets = new petsModel({
        "name": "Marley",
        "species": "cachorro",
        "gender": "masculino",
        "age": "9 meses",
        "disabilityOrIllness": [
            "deficiencia visual"
        ],
        "descriptiondisabilityOrIllness": "Ele é cego dos dois olhos devido à uma má formação.",
        "status": "disponível",
        "neutered": false,
        "wormed": true,
        "vaccinated": true,
        "size": "porte medio",
        "ongsOrTemporaryHomesId": "62e3e7761d576f3ae4befb39"
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
            "age": "9 meses",
            "disabilityOrIllness": [
                "deficiencia visual"
            ],
            "descriptiondisabilityOrIllness": "Ele é cego dos dois olhos devido à uma má formação.",
            "status": "disponível",
            "neutered": false,
            "wormed": true,
            "vaccinated": true,
            "size": "porte medio",
            "ongsOrTemporaryHomesId": "62e3e7761d576f3ae4befb39",
        });
        pets.title = "Marley"
        pets.save().then((data) => {
            expect(data.name).toBe("Marley");
        });
    });
})

describe("DELETE route test", () => {
    it("Must delete the new pet", () => {
        const pets = new petsModel({
            "name": "Marley",
            "species": "cachorro",
            "gender": "masculino",
            "age": "9 meses",
            "disabilityOrIllness": [
                "deficiencia visual"
            ],
            "descriptiondisabilityOrIllness": "Ele é cego dos dois olhos devido à uma má formação.",
            "status": "disponível",
            "neutered": false,
            "wormed": true,
            "vaccinated": true,
            "size": "porte medio",
            "ongsOrTemporaryHomesId": "62e3e7761d576f3ae4befb39"
        });
        pets.save().then((data) => {
            pets.delete().then((newdata) => {
                expect(data.title).toBe(null);
            })
        });

    });
})