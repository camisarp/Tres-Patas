const vetAndSpecialistsModel = require("../src/models/vetAndSpecialistsModel")

describe("GET route test", () => {
    const vetAndSpecialists = new vetAndSpecialistsModel({
        "name": "Dr. Fabio Brito",
        "profession": "veterinario",
        "specialty": "Oftalmologista",
        "whereDoYouWork": "Instituto Veterinário de Oftalmologia",
        "address": [{
            "logradouro": "Rua São Francisco de Assis, 42",
            "bairro": "Boa Viagem",
            "cidade": "Recife",
            "estado": "Pernambuco",
            "cep": "51030-520"
        }],
        "landline": "(81) 3000-0000",
        "cellPhoneAndWhatsapp": "(81) 99998-5393",
        "instagram": "drfabiobrito",
        "email": "fabiobrito@gmail.com",
    });
    it("It must call the schema and return the correct name of the veterinarian and specialist", () => {
        expect(vetAndSpecialists.name).toBe("Dr. Fabio Brito");
    });
    it("It must call the schema and return the correct profession of the veterinarian and specialist", () => {
        expect(vetAndSpecialists.profession).toStrictEqual(["veterinario"]);
    });
    it("It must call the schema and return the correct specialty of the vet and specialist", () => {
        expect(vetAndSpecialists.specialty).toStrictEqual(["Oftalmologista"]);
    });
    it("It must call the schema and return the correct specialty of the vet and specialist", () => {
        expect(vetAndSpecialists.whereDoYouWork).toStrictEqual(["Instituto Veterinário de Oftalmologia"]);
    });
    it("It must call the schema and return the correct full address of the veterinarian and specialist", () => {
        expect(vetAndSpecialists.address).toStrictEqual([{
            "logradouro": "Rua São Francisco de Assis, 42",
            "bairro": "Boa Viagem",
            "cidade": "Recife",
            "estado": "Pernambuco",
            "cep": "51030-520"
        }]);
    });
    it("It must call the schema and return the correct landline of the veterinarian and specialist", () => {
        expect(vetAndSpecialists.landline).toStrictEqual(["(81) 3000-0000"]);
    });
    it("You must call the schema and return the correct cell phone and whatsapp of the veterinarian and specialist", () => {
        expect(vetAndSpecialists.cellPhoneAndWhatsapp).toStrictEqual(["(81) 99998-5393"]);
    });
    it("Must call the schema and return the correct email from the vet and specialist", () => {
        expect(vetAndSpecialists.instagram).toBe("drfabiobrito");
    });
    it("Must call the schema and return the correct email from the vet and specialist", () => {
        expect(vetAndSpecialists.email).toBe("fabiobrito@gmail.com");
    });
});

describe("CREATE route test", () => {
    const vetAndSpecialists = new vetAndSpecialistsModel({
        "name": "Dr. Fabio Brito",
        "profession": "veterinario",
        "specialty": "Oftalmologista",
        "whereDoYouWork": "Instituto Veterinário de Oftalmologia",
        "address": [{
            "logradouro": "Rua São Francisco de Assis, 42",
            "bairro": "Boa Viagem",
            "cidade": "Recife",
            "estado": "Pernambuco",
            "cep": "51030-520"
        }],
        "landline": "(81) 3000-0000",
        "cellPhoneAndWhatsapp": "(81) 99998-5393",
        "instagram": "drfabiobrito",
        "email": "fabiobrito@gmail.com",
    });
    it("Must save in the veterinarian and specialist database", () => {
        vetAndSpecialists.save().then((data) => {
            expect(data.name).toBe("teste ong");
        });
    });
})

describe("UPDATE route test", () => {
    it("You must edit the name and save it in the veterinarian and specialist database", () => {
        const vetAndSpecialists = new vetAndSpecialistsModel({
            "name": "Dr. Fabio Brito",
            "profession": "veterinario",
            "specialty": "Oftalmologista",
            "whereDoYouWork": "Instituto Veterinário de Oftalmologia",
            "address": [{
                "logradouro": "Rua São Francisco de Assis, 42",
                "bairro": "Boa Viagem",
                "cidade": "Recife",
                "estado": "Pernambuco",
                "cep": "51030-520"
            }],
            "landline": "(81) 3000-0000",
            "cellPhoneAndWhatsapp": "(81) 99998-5393",
            "instagram": "drfabiobrito",
            "email": "fabiobrito@gmail.com",
        });
        vetAndSpecialists.title = "nova Ong"
        vetAndSpecialists.save().then((data) => {
            expect(data.name).toBe("teste ong");
        });
    });
})

describe("DELETE route test", () => {
    it("Should exclude the veterinarian and specialist", () => {
        const vetAndSpecialists = new vetAndSpecialistsModel({
            "name": "Dr. Fabio Brito",
            "profession": "veterinario",
            "specialty": "Oftalmologista",
            "whereDoYouWork": "Instituto Veterinário de Oftalmologia",
            "address": [{
                "logradouro": "Rua São Francisco de Assis, 42",
                "bairro": "Boa Viagem",
                "cidade": "Recife",
                "estado": "Pernambuco",
                "cep": "51030-520"
            }],
            "landline": "(81) 3000-0000",
            "cellPhoneAndWhatsapp": "(81) 99998-5393",
            "instagram": "drfabiobrito",
            "email": "fabiobrito@gmail.com",
        });
        vetAndSpecialists.save().then((data) => {
            vetAndSpecialists.delete().then((newData) => {
                expect(data.title).toBe(null);
            })
        });

    });
})