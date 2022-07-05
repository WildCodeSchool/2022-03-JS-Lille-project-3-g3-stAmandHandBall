const express = require("express");

const {
  PlayerController,
  HistoryController,
  StaffController,
  StaffController,
  NewsController,
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

router.get("/historys", HistoryController.browse);
router.get("/historys/:id", HistoryController.read);
router.put("/historys/:id", HistoryController.edit);
router.post("/historys", HistoryController.add);
router.delete("/historys/:id", HistoryController.delete);

router.get("/news", NewsController.browse);
router.get("/news/:id", NewsController.read);
router.put("/news/:id", NewsController.edit);
router.post("/news", NewsController.add);
router.delete("/news/:id", NewsController.delete);

module.exports = router;
