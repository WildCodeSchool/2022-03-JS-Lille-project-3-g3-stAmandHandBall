const express = require("express");

const { PlayerController, StaffController } = require("./controllers");

const router = express.Router();

router.get("/players", PlayerController.browse);
router.get("/players/:id", PlayerController.read);
router.put("/players/:id", PlayerController.edit);
router.post("/players", PlayerController.add);
router.delete("/players/:id", PlayerController.delete);

router.get("/staffs", StaffController.browse);
router.get("/staffs/:id", StaffController.read);
router.put("/staffs/:id", StaffController.edit);
router.post("/staffs", StaffController.add);
router.delete("/staffs/:id", StaffController.delete);

module.exports = router;
