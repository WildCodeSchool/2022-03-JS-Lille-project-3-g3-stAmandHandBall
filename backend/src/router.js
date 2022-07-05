const express = require("express");

const {
  PlayerController,
  StaffController,
  TeamController,
} = require("./controllers");

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

router.get("/team", TeamController.browse);
router.get("/team/:id", TeamController.read);
router.put("/team/:id", TeamController.edit);
router.post("/team", TeamController.add);
router.delete("/team/:id", TeamController.delete);

module.exports = router;
