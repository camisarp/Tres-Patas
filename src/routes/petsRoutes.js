const controller = require("../controller/petsController");
const express = require("express");
const router = express.Router();

router.get("/pets", controller.getAllPets);
router.get("/pets/status", controller.getByStatus);
router.get("/pets/specifications", controller.getBySpecifications);
router.get("/pets/:id", controller.getPetById);

router.post("/pets", controller.createNewPet);
router.patch("/pets/:id", controller.updatePetById);
router.delete("/pets/:id", controller.deletePetById);

module.exports = router;