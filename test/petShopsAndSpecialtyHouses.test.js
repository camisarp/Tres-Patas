const petShopsAndSpecialtyHousesModel = require("../src/models/petShopsAndSpecialtyHousesModel")

describe("GET route test", () => {
    const petShopsAndSpecialtyHouses = new petShopsAndSpecialtyHousesModel({
        "name": "Mundo Pet",
        "classification": [
            "Pet Shop"
        ],
        "address": [{
            "logradouro": "R. Leonardo Bezerra Cavalcante, 587",
            "bairro": "Casa Forte",
            "cidade": "Recife",
            "estado": "Pernambuco",
            "cep": "52060-445"
        }],
        "landline": "(81) 2011-1855",
        "cellPhoneAndWhatsapp": "(81) 90000-0000",
        "email": "mundopet@gmail.com",
        "instagram": "@mundopetbrasil",
        "description": "descrição teste"
    });
    it("It must call the schema and return the correct name of the pet shop or specialized house", () => {
        expect(petShopsAndSpecialtyHouses.name).toBe("Mundo Pet");
    });
    it("It must call the schema and return the correct classification of the pet shop or specialized house", () => {
        expect(petShopsAndSpecialtyHouses.classification).toStrictEqual(["Pet Shop"]);
    });
    it("It must call the schema and return the correct complete address of the pet shop or specialized house", () => {
        expect(petShopsAndSpecialtyHouses.address).toStrictEqual([{
            "logradouro": "R. Leonardo Bezerra Cavalcante, 587",
            "bairro": "Casa Forte",
            "cidade": "Recife",
            "estado": "Pernambuco",
            "cep": "52060-445"
        }]);
    });
    it("You must call the schema and return the correct landline of the pet shop or specialized house", () => {
        expect(petShopsAndSpecialtyHouses.landline).toStrictEqual("(81) 2011-1855");
    });
    it("You must call the schema and return the correct cell phone and whatsapp from the pet shop or specialized house", () => {
        expect(petShopsAndSpecialtyHouses.cellPhoneAndWhatsapp).toStrictEqual(["(81) 90000-0000"]);
    });
    it("You must call the schema and return the correct email from the pet shop or specialized house", () => {
        expect(petShopsAndSpecialtyHouses.email).toBe("mundopet@gmail.com");
    });
    it("It must call the schema and return the correct instagram of the pet shop or specialized house", () => {
        expect(petShopsAndSpecialtyHouses.instagram).toBe("@mundopetbrasil");
    });
    it("It must call the schema and return the correct description of the pet shop or specialized house", () => {
        expect(petShopsAndSpecialtyHouses.description).toBe("descrição teste");
    });
});

describe("CREATE route test", () => {
    const petShopsAndSpecialtyHouses = new petShopsAndSpecialtyHousesModel({
        "name": "Mundo Pet",
        "classification": [
            "Pet Shop"
        ],
        "address": [{
            "logradouro": "R. Leonardo Bezerra Cavalcante, 587",
            "bairro": "Casa Forte",
            "cidade": "Recife",
            "estado": "Pernambuco",
            "cep": "52060-445"
        }],
        "landline": "(81) 2011-1855",
        "cellPhoneAndWhatsapp": "(81) 90000-0000",
        "email": "mundopet@gmail.com",
        "instagram": "@mundopetbrasil",
        "description": "descrição teste"
    });
    it("You must save the pet shop or specialized house in the database", () => {
        petShopsAndSpecialtyHouses.save().then((dados) => {
            expect(dados.name).toBe("Mundo Pet");
        });
    });
})

describe("UPDATE route test", () => {
    it("You must edit the name and save the pet shop or specialized house in the database", () => {
        const petShopsAndSpecialtyHouses = new petShopsAndSpecialtyHousesModel({
            "name": "Mundo Pet",
            "classification": [
                "Pet Shop"
            ],
            "address": [{
                "logradouro": "R. Leonardo Bezerra Cavalcante, 587",
                "bairro": "Casa Forte",
                "cidade": "Recife",
                "estado": "Pernambuco",
                "cep": "52060-445"
            }],
            "landline": "(81) 2011-1855",
            "cellPhoneAndWhatsapp": "(81) 90000-0000",
            "email": "mundopet@gmail.com",
            "instagram": "@mundopetbrasil",
            "description": "descrição teste"
        });
        petShopsAndSpecialtyHouses.title = "nova Ong"
        petShopsAndSpecialtyHouses.save().then((data) => {
            expect(data.name).toBe("Mundo Pet");
        });
    });
})

describe("DELETE route test", () => {
    it("Should exclude the pet shop or specialized house", () => {
        const petShopsAndSpecialtyHouses = new petShopsAndSpecialtyHousesModel({
            "name": "Mundo Pet",
            "classification": [
                "Pet Shop"
            ],
            "address": [{
                "logradouro": "R. Leonardo Bezerra Cavalcante, 587",
                "bairro": "Casa Forte",
                "cidade": "Recife",
                "estado": "Pernambuco",
                "cep": "52060-445"
            }],
            "landline": "(81) 2011-1855",
            "cellPhoneAndWhatsapp": "(81) 90000-0000",
            "email": "mundopet@gmail.com",
            "instagram": "@mundopetbrasil",
            "description": "descrição teste"
        });
        petShopsAndSpecialtyHouses.save().then((data) => {
            petShopsAndSpecialtyHouses.delete().then((newdata) => {
                expect(data.title).toBe(null);
            })
        });

    });
})