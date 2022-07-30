const controller = require("../controller/petsController");
const {
    auth
} = require("../middleware/authentication");
const express = require("express");
const router = express.Router();

router.get("/pets", controller.getAllPets);
router.get("/pet/:id", controller.getPetById);

router.post("/pet/registration", auth, controller.createNewPet);
router.patch("/pet/update/:id", auth, controller.updatePetById);
router.delete("/pet/delete/:id", auth, controller.deletePetById);

module.exports = router;