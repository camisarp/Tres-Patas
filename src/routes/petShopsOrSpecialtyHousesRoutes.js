const controller = require("../controller/petShopsOrSpecialtyHousesController");
const {
    auth
} = require("../middleware/authentication");
const express = require("express");
const router = express.Router();

router.get("/petShopsOrSpecialtyHouses", controller.getAllPetShopsOrSpecialtyHouses);
router.get("/petShopsOrSpecialtyHouses/address", controller.getByAddress);
router.get("/petShopsOrSpecialtyHouses/:id", controller.getPetShopsOrSpecialtyHousesById);

router.post("/petShopsOrSpecialtyHouse/registration", auth, controller.createNewPetShopsOrSpecialtyHouses);
router.patch("/petShopsOrSpecialtyHouse/update/:id", auth, controller.updatePetShopsOrSpecialtyHousesById);
router.delete("/petShopsOrSpecialtyHouse/delete/:id", auth, controller.deletePetShopsOrSpecialtyHousesById);

module.exports = router;