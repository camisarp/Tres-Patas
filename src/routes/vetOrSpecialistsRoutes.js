const controller = require("../controller/vetOrSpecialistsController");
const {
    auth
} = require("../middleware/authentication");
const express = require("express");
const router = express.Router();

router.get("/vetOrSpecialists", controller.getAllVetOrSpecialists);
router.get("/vetOrSpecialists/address", controller.getByAddress);
router.get("/vetOrSpecialists/:id", controller.getVetOrSpecialistsId);

router.post("/vetOrSpecialist/registration", auth, controller.createNewVetOrSpecialists);
router.patch("/vetOrSpecialist/update/:id", auth, controller.updateVetOrSpecialistsId);
router.delete("/vetOrSpecialist/delete/:id", auth, controller.deleteVetOrSpecialistsId);

module.exports = router;