const ongsOrTemporaryHomesModel = require("../src/models/ongsOrTemporaryHomesModel")

describe("GET route test", () => {
    const ongsOrTemporaryHomes = new ongsOrTemporaryHomesModel({
        "name": "Mundo do Marley",
        "classification": [
            "ONG"
        ],
        "address": [{
            "street": "Av. Batalha do Tuiuti",
            "district": "Aguas compridas",
            "city": "Olinda",
            "state": "Pernambuco",
            "zipCode": "53280-270",
            "_id": "62e42952f2df601883ef92f4"
        }],
        "responsible": "Uninformed",
        "cellPhoneOrWhatsapp": [
            "(81) 98995-0128"
        ],
        "instagram": "@mundo.domarley",
        "description": "Animais retirados das ruas, vitimas de maus tratos e abandono."
    });
    it("It must call the schema and return the correct name of the NGO or temporary home", () => {
        expect(ongsOrTemporaryHomes.name).toBe("Mundo do Marley");
    });
    it("It must call the schema and return the correct classification of the NGO or temporary home", () => {
        expect(ongsOrTemporaryHomes.classification).toStrictEqual(["ONG"]);
    });
    it("You must call the schema and return the correct cell phone and whatsapp of the NGO or temporary home", () => {
        expect(ongsOrTemporaryHomes.cellPhoneOrWhatsapp).toStrictEqual(["(81) 98995-0128"]);
    });
    it("Must call the schema and return the correct instagram from the NGO or temporary home", () => {
        expect(ongsOrTemporaryHomes.instagram).toBe("@mundo.domarley");
    });
    it("It must call the schema and return the correct description of the NGO or temporary home", () => {
        expect(ongsOrTemporaryHomes.description).toBe("Animais retirados das ruas, vitimas de maus tratos e abandono.");
    });
});

describe("CREATE route test", () => {
    const ongsOrTemporaryHomes = new ongsOrTemporaryHomesModel({
        "name": "Mundo do Marley",
        "classification": [
            "ONG"
        ],
        "address": [{
            "street": "Av. Batalha do Tuiuti",
            "district": "Aguas compridas",
            "city": "Olinda",
            "state": "Pernambuco",
            "zipCode": "53280-270",
            "_id": "62e3e7761d576f3ae4befb38"
        }],
        "responsible": "Uninformed",
        "landline": [
            "Uninformed"
        ],
        "cellPhoneOrWhatsapp": [
            "(81) 98995-0128"
        ],
        "instagram": "@mundo.domarley",
        "description": "Animais retirados das ruas, vitimas de maus tratos e abandono."
    });
    it("The new Ong or temporary home must be saved in the database", () => {
        ongsOrTemporaryHomes.save().then((data) => {
            expect(data.title).toBe("Mundo do Marley");
        });
    });
})

describe("UPDATE route test", () => {
    it("You must edit the name and save the new ong or temporary home in the database", () => {
        const ongsOrTemporaryHomes = new ongsOrTemporaryHomesModel({
            "name": "Mundo do Marley",
            "classification": [
                "ONG"
            ],
            "address": [{
                "street": "Av. Batalha do Tuiuti",
                "district": "Aguas compridas",
                "city": "Olinda",
                "state": "Pernambuco",
                "zipCode": "53280-270",
                "_id": "62e3e7761d576f3ae4befb38"
            }],
            "responsible": "Uninformed",
            "landline": [
                "Uninformed"
            ],
            "cellPhoneOrWhatsapp": [
                "(81) 98995-0128"
            ],
            "instagram": "@mundo.domarley",
            "description": "Animais retirados das ruas, vitimas de maus tratos e abandono."
        });
        ongsOrTemporaryHomes.title = "new Ong"
        ongsOrTemporaryHomes.save().then((data) => {
            expect(data.name).toBe("Mundo do Marley");
        });
    });
})

describe("DELETE route test", () => {
    it("Must delete the new ong or temporary home", () => {
        const ongsOrTemporaryHomes = new ongsOrTemporaryHomesModel({
            "name": "Mundo do Marley",
            "classification": [
                "ONG"
            ],
            "address": [{
                "street": "Av. Batalha do Tuiuti",
                "district": "Aguas compridas",
                "city": "Olinda",
                "state": "Pernambuco",
                "zipCode": "53280-270",
                "_id": "62e3e7761d576f3ae4befb38"
            }],
            "responsible": "Uninformed",
            "landline": [
                "Uninformed"
            ],
            "cellPhoneOrWhatsapp": [
                "(81) 98995-0128"
            ],
            "instagram": "@mundo.domarley",
            "description": "Animais retirados das ruas, vitimas de maus tratos e abandono."
        });
        ongsOrTemporaryHomes.save().then((data) => {
            ongsOrTemporaryHomes.delete().then((newdata) => {
                expect(data.title).toBe(null);
            })
        });

    });
})