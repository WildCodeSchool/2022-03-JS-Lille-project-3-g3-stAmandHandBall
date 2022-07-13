const express = require("express");

const {
  AdminController,
  CalendarController,
  HistoryController,
  NewsController,
  NewsAndTeamController,
  OpponentController,
  PlayerController,
  RefereeAndRoleController,
  RefereeController,
  RoleController,
  ContactController,
  RoleAndStaffController,
  StaffController,
  TeamController,
  TeamAndStaffController,
} = require("./controllers");

const router = express.Router();

router.get("/players", PlayerController.browse);
router.get("/players/:id", PlayerController.read);
router.put("/players/:id", PlayerController.edit);
router.post("/players", PlayerController.add);
router.delete("/players/:id", PlayerController.delete);

router.get("/calendar", CalendarController.browse);
router.get("/calendar/:id", CalendarController.read);
router.put("/calendar/:id", CalendarController.edit);
router.post("/calendar", CalendarController.add);
router.delete("/calendar/:id", CalendarController.delete);

router.get("/staff", StaffController.browse);
router.get("/staff/:id", StaffController.read);
router.put("/staff/:id", StaffController.edit);
router.post("/staff", StaffController.add);
router.delete("/staff/:id", StaffController.delete);

router.get("/news", NewsController.browse);
router.get("/news/team", NewsAndTeamController.browse);
router.get("/news/:id", NewsController.read);
router.put("/news/:id", NewsController.edit);
router.post("/news", NewsController.add);
router.delete("/news/:id", NewsController.delete);

router.get("/role", RoleController.browse);
router.get("/role/staff/", RoleAndStaffController.browse);
router.get("/role/:id", RoleController.read);
router.put("/role/:id", RoleController.edit);
router.post("/role", RoleController.add);
router.delete("/role/:id", RoleController.delete);

router.post("/contact", ContactController.add);

router.get("/referee", RefereeController.browse);
router.get("/referee/role", RefereeAndRoleController.browse);
router.get("/referee/:id", RefereeController.read);
router.put("/referee/:id", RefereeController.edit);
router.post("/referee", RefereeController.add);
router.delete("/referee/:id", RefereeController.delete);

router.get("/team", TeamController.browse);
router.get("/team/staff", TeamAndStaffController.browse);
router.get("/team/:id", TeamController.read);
router.put("/team/:id", TeamController.edit);
router.post("/team", TeamController.add);
router.delete("/team/:id", TeamController.delete);

router.get("/opponent", OpponentController.browse);
router.get("/opponent/:id", OpponentController.read);
router.put("/opponent/:id", OpponentController.edit);
router.post("/opponent", OpponentController.add);
router.delete("/opponent/:id", OpponentController.delete);

router.get("/admin", AdminController.browse);
router.get("/admin/:id", AdminController.read);
router.post("/admin", AdminController.add);
router.delete("/admin/:id", AdminController.delete);

router.get("/history", HistoryController.browse);
router.get("/history/:id", HistoryController.read);
router.post("/history", HistoryController.add);
router.delete("/history/:id", HistoryController.delete);

module.exports = router;
