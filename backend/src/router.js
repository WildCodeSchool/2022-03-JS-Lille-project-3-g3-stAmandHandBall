const express = require("express");
const passport = require("passport");

const {
  CalendarController,
  HistoryController,
  NewsController,
  NewsAndTeamController,
  OpponentController,
  PlayerController,
  RefereeAndRoleController,
  RefereeController,
  RoleController,
  AuthController,
  ContactController,
  RoleAndStaffController,
  StaffController,
  TeamController,
  TeamAndStaffController,
} = require("./controllers");

const router = express.Router();

// admin route //

router.post(
  "/auth/signup",
  passport.authenticate("jwt", { session: false }),
  AuthController.login
);
router.post(
  "/auth/login",
  passport.authenticate("local", { session: false }),
  AuthController.login
);
router.get(
  "/admin",
  passport.authenticate("jwt", { session: false }),
  AuthController.browse
);
router.get(
  "/admin/:id",
  passport.authenticate("jwt", { session: false }),
  AuthController.read
);
router.post(
  "/admin",
  passport.authenticate("jwt", { session: false }),
  AuthController.signup
);
router.delete(
  "/admin/:id",
  passport.authenticate("jwt", { session: false }),
  AuthController.delete
);

// player route  //

router.get("/players", PlayerController.browse);
router.get("/players/:id", PlayerController.read);
router.put("/players/:id", PlayerController.edit);
router.post("/players", PlayerController.add);
router.delete("/players/:id", PlayerController.delete);

// calendar route  //

router.get("/calendar", CalendarController.browse);
router.get("/calendar/:id", CalendarController.read);
router.put("/calendar/:id", CalendarController.edit);
router.post("/calendar", CalendarController.add);
router.delete("/calendar/:id", CalendarController.delete);

// staff route  //

router.get("/staff", StaffController.browse);
router.get("/staff/:id", StaffController.read);
router.put("/staff/:id", StaffController.edit);
router.post("/staff", StaffController.add);
router.delete("/staff/:id", StaffController.delete);

// news route  //

router.get("/news", NewsController.browse);
router.get("/news/team", NewsAndTeamController.browse);
router.get("/news/:id", NewsController.read);
router.put("/news/:id", NewsController.edit);
router.post("/news", NewsController.add);
router.delete("/news/:id", NewsController.delete);

// role route  //

router.get("/role", RoleController.browse);
router.get("/role/staff", RoleAndStaffController.browse);
router.put("/role/:id", RoleController.edit);
router.get("/role/:id", RoleController.read);
router.get("/role/staff/:id", RoleAndStaffController.read);
router.post("/role", RoleController.add);
router.delete("/role/:id", RoleController.delete);

// contact route  //

router.get("/contact", ContactController.browse);
router.get("/contact/:id", ContactController.read);
router.post("/contact", ContactController.add);
router.delete("/contact/:id", ContactController.delete);

// referee route  //

router.get("/referee", RefereeController.browse);
router.get("/referee/role", RefereeAndRoleController.browse);
router.get("/referee/:id", RefereeController.read);
router.put("/referee/:id", RefereeController.edit);
router.post("/referee", RefereeController.add);
router.delete("/referee/:id", RefereeController.delete);

// team route  //

router.get("/team", TeamController.browse);
router.get("/team/staff", TeamAndStaffController.browse);
router.get("/team/:id", TeamController.read);
router.put("/team/:id", TeamController.edit);
router.post("/team", TeamController.add);
router.delete("/team/:id", TeamController.delete);

// opponent route  //

router.get("/opponent", OpponentController.browse);
router.get("/opponent/:id", OpponentController.read);
router.put("/opponent/:id", OpponentController.edit);
router.post("/opponent", OpponentController.add);
router.delete("/opponent/:id", OpponentController.delete);

// history route  //

router.get("/history", HistoryController.browse);
router.get("/history/:id", HistoryController.read);
router.post("/history", HistoryController.add);
router.delete("/history/:id", HistoryController.delete);

module.exports = router;
