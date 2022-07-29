const petShopsOrSpecialtyHousesModel = require("../src/models/petShopsOrSpecialtyHousesModel")

describe("GET route test", () => {
    const petShopsOrSpecialtyHouses = new petShopsOrSpecialtyHousesModel({
        "name": "Bicho Mimado",
        "classification": [
            "Pet Shop"
        ],
        "address": [{
            "street": "Av. Caxangá, 2020",
            "district": "Cordeiro",
            "city": "Recife",
            "state": "Pernambuco",
            "zipCode": "50711-000",
            "_id": "62e41965361e2b99867c2756"
        }],
        "landline": [
            " (81) 3228-2590"
        ],
        "cellPhoneOrWhatsapp": [],
        "instagram": "@bicho.mimado",
        "description": "Uninformed",
    });
    it("It must call the schema and return the correct name of the pet shop or specialized house", () => {
        expect(petShopsOrSpecialtyHouses.name).toBe("Bicho Mimado");
    });
    it("It must call the schema and return the correct classification of the pet shop or specialized house", () => {
        expect(petShopsOrSpecialtyHouses.classification).toStrictEqual(["Pet Shop"]);
    });
    it("You must call the schema and return the correct landline of the pet shop or specialized house", () => {
        expect(petShopsOrSpecialtyHouses.landline).toStrictEqual([" (81) 3228-2590"]);
    });
    it("It must call the schema and return the correct instagram of the pet shop or specialized house", () => {
        expect(petShopsOrSpecialtyHouses.instagram).toBe("@bicho.mimado");
    });
    it("It must call the schema and return the correct description of the pet shop or specialized house", () => {
        expect(petShopsOrSpecialtyHouses.description).toBe("Uninformed");
    });
});

describe("CREATE route test", () => {
    const petShopsOrSpecialtyHouses = new petShopsOrSpecialtyHousesModel({
        "name": "Bicho Mimado",
        "classification": [
            "Pet Shop"
        ],
        "address": [{
            "street": "Av. Caxangá, 2020",
            "district": "Cordeiro",
            "city": "Recife",
            "state": "Pernambuco",
            "zipCode": "50711-000",
            "_id": "62e41965361e2b99867c2756"
        }],
        "landline": [
            " (81) 3228-2590"
        ],
        "cellPhoneOrWhatsapp": [],
        "instagram": "@bicho.mimado",
        "description": "Uninformed",
    });
    it("You must save the pet shop or specialized house in the database", () => {
        petShopsOrSpecialtyHouses.save().then((data) => {
            expect(data.name).toBe("Bicho Mimado");
        });
    });
})

describe("UPDATE route test", () => {
    it("You must edit the name and save the pet shop or specialized house in the database", () => {
        const petShopsOrSpecialtyHouses = new petShopsOrSpecialtyHousesModel({
            "name": "Bicho Mimado",
            "classification": [
                "Pet Shop"
            ],
            "address": [{
                "street": "Av. Caxangá, 2020",
                "district": "Cordeiro",
                "city": "Recife",
                "state": "Pernambuco",
                "zipCode": "50711-000",
                "_id": "62e41965361e2b99867c2756"
            }],
            "landline": [
                " (81) 3228-2590"
            ],
            "cellPhoneOrWhatsapp": [],
            "instagram": "@bicho.mimado",
            "description": "Uninformed",
        });
        petShopsOrSpecialtyHouses.title = "nova PetShop"
        petShopsOrSpecialtyHouses.save().then((data) => {
            expect(data.name).toBe("Bicho Mimado");
        });
    });
})

describe("DELETE route test", () => {
    it("Should exclude the pet shop or specialized house", () => {
        const petShopsOrSpecialtyHouses = new petShopsOrSpecialtyHousesModel({
            "name": "Bicho Mimado",
            "classification": [
                "Pet Shop"
            ],
            "address": [{
                "street": "Av. Caxangá, 2020",
                "district": "Cordeiro",
                "city": "Recife",
                "state": "Pernambuco",
                "zipCode": "50711-000",
                "_id": "62e41965361e2b99867c2756"
            }],
            "landline": [
                " (81) 3228-2590"
            ],
            "cellPhoneOrWhatsapp": [],
            "instagram": "@bicho.mimado",
            "description": "Uninformed",
        });
        petShopsOrSpecialtyHouses.save().then((data) => {
            petShopsOrSpecialtyHouses.delete().then((newdata) => {
                expect(data.title).toBe(null);
            })
        });

    });
})