const vetOrSpecialistsModel = require("../src/models/vetOrSpecialistsModel")

describe("GET route test", () => {
    const vetOrSpecialists = new vetOrSpecialistsModel({
        "name": "Dra. Gaia Maria",
        "profession": [
            "veterinaria"
        ],
        "specialty": [
            "Cirurgiã"
        ],
        "whereDoYouWork": [{
            "name": "Hospital Veterinário do Recife Robson José Gomes de Melo (HVR)",
            "street": "Av. Prof. Estevão Francisco da Costa, s/n",
            "district": "Cordeiro",
            "city": "Recife",
            "state": "Pernambuco",
            "zipCode": "50620-450",
            "_id": "62e41fd23e8b8f7a8f6b19e7"
        }],
        "landline": [
            "Uninformed"
        ],
        "cellPhoneOrWhatsapp": [
            "(81) 4042-3034"
        ],
    });
    it("It must call the schema and return the correct name of the veterinarian and specialist", () => {
        expect(vetOrSpecialists.name).toBe("Dra. Gaia Maria");
    });
    it("It must call the schema and return the correct profession of the veterinarian and specialist", () => {
        expect(vetOrSpecialists.profession).toStrictEqual(["veterinaria"]);
    });
    it("It must call the schema and return the correct specialty of the vet and specialist", () => {
        expect(vetOrSpecialists.specialty).toStrictEqual(["Cirurgiã"]);
    });
    it("You must call the schema and return the correct cell phone and whatsapp of the veterinarian and specialist", () => {
        expect(vetOrSpecialists.cellPhoneOrWhatsapp).toStrictEqual(["(81) 4042-3034"]);
    });
});

describe("CREATE route test", () => {
    const vetOrSpecialists = new vetOrSpecialistsModel({
        "_id": "62e41fd23e8b8f7a8f6b19e8",
        "name": "Dra. Gaia Maria",
        "profession": [
            "veterinaria"
        ],
        "specialty": [
            "Cirurgiã"
        ],
        "whereDoYouWork": [{
            "name": "Hospital Veterinário do Recife Robson José Gomes de Melo (HVR)",
            "street": "Av. Prof. Estevão Francisco da Costa, s/n",
            "district": "Cordeiro",
            "city": "Recife",
            "state": "Pernambuco",
            "zipCode": "50620-450",
            "_id": "62e41fd23e8b8f7a8f6b19e7"
        }],
        "landline": [
            "Uninformed"
        ],
        "cellPhoneOrWhatsapp": [
            "(81) 4042-3034"
        ],
    });
    it("Must save in the veterinarian and specialist database", () => {
        vetOrSpecialists.save().then((data) => {
            expect(data.name).toBe("Dra. Gaia Maria");
        });
    });
})

describe("UPDATE route test", () => {
    it("You must edit the name and save it in the veterinarian and specialist database", () => {
        const vetOrSpecialists = new vetOrSpecialistsModel({
            "name": "Dra. Gaia Maria",
            "profession": [
                "veterinaria"
            ],
            "specialty": [
                "Cirurgiã"
            ],
            "whereDoYouWork": [{
                "name": "Hospital Veterinário do Recife Robson José Gomes de Melo (HVR)",
                "street": "Av. Prof. Estevão Francisco da Costa, s/n",
                "district": "Cordeiro",
                "city": "Recife",
                "state": "Pernambuco",
                "zipCode": "50620-450",
                "_id": "62e41fd23e8b8f7a8f6b19e7"
            }],
            "landline": [
                "Uninformed"
            ],
            "cellPhoneOrWhatsapp": [
                "(81) 4042-3034"
            ],
        });
        vetOrSpecialists.title = "new Vet"
        vetOrSpecialists.save().then((data) => {
            expect(data.name).toBe("Dra. Gaia Maria");
        });
    });
})

describe("DELETE route test", () => {
    it("Should exclude the veterinarian and specialist", () => {
        const vetOrSpecialists = new vetOrSpecialistsModel({
            "name": "Dra. Gaia Maria",
            "profession": [
                "veterinaria"
            ],
            "specialty": [
                "Cirurgiã"
            ],
            "whereDoYouWork": [{
                "name": "Hospital Veterinário do Recife Robson José Gomes de Melo (HVR)",
                "street": "Av. Prof. Estevão Francisco da Costa, s/n",
                "district": "Cordeiro",
                "city": "Recife",
                "state": "Pernambuco",
                "zipCode": "50620-450",
                "_id": "62e41fd23e8b8f7a8f6b19e7"
            }],
            "landline": [
                "Uninformed"
            ],
            "cellPhoneOrWhatsapp": [
                "(81) 4042-3034"
            ],
        });
        vetOrSpecialists.save().then((data) => {
            vetOrSpecialists.delete().then((newData) => {
                expect(data.title).toBe(null);
            })
        });

    });
})