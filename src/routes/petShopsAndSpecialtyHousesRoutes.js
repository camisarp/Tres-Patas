const controller = require("../controller/petShopsAndSpecialtyHousesController");
const express = require("express");
const router = express.Router();

router.get("/petShopsAndSpecialtyHouses", controller.getAllPetShopsAndSpecialtyHouses);
router.get("/petShopsAndSpecialtyHouses/name", controller.getByName);
router.get("/petShopsAndSpecialtyHouses/classification", controller.getByClassification);
router.get("/petShopsAndSpecialtyHouses/address", controller.getByAddress);
router.get("/petShopsAndSpecialtyHouses/:id", controller.getPetShopsAndSpecialtyHousesById);

router.post("/petShopsAndSpecialtyHouses", controller.  createNewPetShopsAndSpecialtyHouses);
router.patch("/petShopsAndSpecialtyHouses/:id", controller.updatePetShopsAndSpecialtyHousesById);
router.delete("/petShopsAndSpecialtyHouses/:id", controller.deletePetShopsAndSpecialtyHousesById);

module.exports = router;