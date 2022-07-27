const controller = require("../controller/vetAndSpecialistsController");
const express = require("express");
const router = express.Router();

router.get("/vetAndSpecialists", controller.getAllvetAndSpecialists);
router.get("/vetAndSpecialists/name", controller.getByName);
router.get("/vetAndSpecialists/classification", controller.getByClassification);
router.get("/vetAndSpecialists/address", controller.getByAddress);
router.get("/vetAndSpecialists/:id", controller.getvetAndSpecialistsId);

router.post("/vetAndSpecialists", controller.createNewvetAndSpecialists);
router.patch("/vetAndSpecialists/:id", controller.updatevetAndSpecialistsId);
router.delete("/vetAndSpecialists/:id", controller.deletevetAndSpecialistsId);

module.exports = router;