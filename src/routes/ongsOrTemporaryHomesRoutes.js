const controller = require("../controller/ongsOrTemporaryHomesController");
const {
    auth
} = require("../middleware/authentication");
const express = require("express");
const router = express.Router();

router.get("/ongsOrTemporaryHomes", controller.getAllOngOrHome);
router.get("/ongsOrTemporaryHomes/address", controller.getByAddress);
router.get("/ongsOrTemporaryHome/:id", controller.getOngOrHomeId);

router.post("/ongsOrTemporaryHomes/registration", auth, controller.createNewOngOrHome);
router.patch("/ongsOrTemporaryHome/update/:id", auth, controller.updateOngOrHomeId);
router.delete("/ongsOrTemporaryHome/delete/:id", auth, controller.deleteOngOrHomeId);

module.exports = router;