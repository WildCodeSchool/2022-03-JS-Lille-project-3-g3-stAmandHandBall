const express = require("express");

const {
  PlayerController,
  HistoryController,
  StaffController,
  NewsController,
  RoleController,
  StaffAndRoleController,
} = require("./controllers");

const router = express.Router();

router.get("/players", PlayerController.browse);
router.get("/players/:id", PlayerController.read);
router.put("/players/:id", PlayerController.edit);
router.post("/players", PlayerController.add);
router.delete("/players/:id", PlayerController.delete);

router.get("/staff", StaffController.browse);
router.get("/staff/:id", StaffController.read);
router.put("/staff/:id", StaffController.edit);
router.post("/staff", StaffController.add);
router.delete("/staff/:id", StaffController.delete);

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

router.get("/role/all/", StaffAndRoleController.browse);
router.get("/role", RoleController.browse);
router.get("/role/:id", RoleController.read);
router.put("/role/:id", RoleController.edit);
router.post("/role", RoleController.add);
router.delete("/role/:id", RoleController.delete);

module.exports = router;
