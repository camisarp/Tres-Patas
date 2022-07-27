const usersModel = require("../src/models/usersModel")

describe("GET route test", () => {
    const users = new usersModel({
        "fullName": "test name",
        "age": 34,
        "genderIdentity": "feminina",
        "address": [{
            "logradouro": "Rua Joaquim Alheiros nº410",
            "bairro": "Cordeiro",
            "cidade": "Recife",
            "estado": "Pernambuco",
            "cep": "50711-240"
        }],
        "landline": "(81) 3000-0000",
        "cellPhoneAndWhatsapp": "(81) 99704-6802",
        "email": "camilarp.rec@gmail.com",
        "password": "abcdef"
    });
    it("Must call the schema and return the correct full name of the user ", () => {
        expect(users.fullName).toBe("test name");
    });
    it("It must call the schema and return the correct age of the user ", () => {
        expect(users.age).toEqual(34);
    });
    it("It must call the schema and return the user's correct gender ", () => {
        expect(users.genderIdentity).toBe("feminina");
    });
    it("It must call the schema and return the correct full address of the user ", () => {
        expect(users.address).toStrictEqual([{
            "logradouro": "Rua Joaquim Alheiros nº410",
            "bairro": "Cordeiro",
            "cidade": "Recife",
            "estado": "Pernambuco",
            "cep": "50711-240"
        }]);
    });
    it("It must call the schema and return the user's correct landline phone", () => {
        expect(users.landline).toStrictEqual(["(81) 3000-0000"]);
    });
    it("It must call the schema and return the user's correct cell phone and whatsapp", () => {
        expect(users.cellPhoneAndWhatsapp).toStrictEqual(["(81) 99704-6802"]);
    });
    it("It must call the schema and return the user's correct email", () => {
        expect(users.email).toBe("camilarp.rec@gmail.com");
    });
    it("It must call the schema and return the user's correct password", () => {
        expect(users.password).toBe("abcdef");
    });
});

describe("CREATE route test", () => {
    const users = new usersModel({
        "fullName": "test name",
        "age": 34,
        "genderIdentity": "feminina",
        "address": [{
            "logradouro": "Rua Joaquim Alheiros nº410",
            "bairro": "Cordeiro",
            "cidade": "Recife",
            "estado": "Pernambuco",
            "cep": "50711-240"
        }],
        "landline": "(81) 3000-0000",
        "cellPhoneAndWhatsapp": "(81) 99704-6802",
        "email": "camilarp.rec@gmail.com",
        "password": "abcdef"
    });
    it("The new user must be saved in the database.", () => {
        users.save().then((dados) => {
            expect(dados.fullName).toBe("test name");
        });
    });
})

describe("UPDATE route test", () => {
    it("You must edit the full name and save the new user in the database", () => {
        const users = new usersModel({
            "fullName": "test name",
            "age": 34,
            "genderIdentity": "feminina",
            "address": [{
                "logradouro": "Rua Joaquim Alheiros nº410",
                "bairro": "Cordeiro",
                "cidade": "Recife",
                "estado": "Pernambuco",
                "cep": "50711-240"
            }],
            "landline": "(81) 3000-0000",
            "cellPhoneAndWhatsapp": "(81) 99704-6802",
            "email": "camilarp.rec@gmail.com",
            "password": "abcdef"
        });
        users.title = "nova user"
        users.save().then((dados) => {
            expect(dados.fullName).toBe("test name");
        });
    });
})

describe("DELETE route test", () => {
    it("Must delete the new user", () => {
        const users = new usersModel({
            "fullName": "test name",
            "age": 34,
            "genderIdentity": "feminina",
            "address": [{
                "logradouro": "Rua Joaquim Alheiros nº410",
                "bairro": "Cordeiro",
                "cidade": "Recife",
                "estado": "Pernambuco",
                "cep": "50711-240"
            }],
            "landline": "(81) 3000-0000",
            "cellPhoneAndWhatsapp": "(81) 99704-6802",
            "email": "camilarp.rec@gmail.com",
            "password": "abcdef"
        });
        users.save().then((dados) => {
            users.delete().then((novosdados) => {
                expect(dados.fullName).toBe(null);
            })
        });

    });
})