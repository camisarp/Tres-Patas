const controller = require("../controller/usersController");
const express = require("express");
const router = express.Router();

router.post("/registration", controller.createNewUser);
router.get("/search", controller.allUsers);
router.post("/login/:id", controller.login);
router.delete("/delete/:id", controller.deleteUser);

module.exports = router;