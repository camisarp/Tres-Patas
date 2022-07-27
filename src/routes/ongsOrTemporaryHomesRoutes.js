const controller = require("../controller/ongsOrTemporaryHomesController");
const express = require("express");
const router = express.Router();

router.get("/ongsOrTemporaryHomes", controller.getAllOngOrHome);
router.get("/ongsOrTemporaryHomes/name", controller.getByName);
router.get("/ongsOrTemporaryHomes/classification", controller.getByClassification);
router.get("/ongsOrTemporaryHomes/address", controller.getByAddress);
router.get("/ongsOrTemporaryHomes/:id", controller.getOngOrHomeId);

router.post("/ongsOrTemporaryHomes/", controller.createNewOngOrHome);
router.patch("/ongsOrTemporaryHomes/:id", controller.updateOngOrHomeId);
router.delete("/ongsOrTemporaryHomes/:id", controller.deleteOngOrHomeId);

module.exports = router;