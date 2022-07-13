const express = require("express");
const passport = require("passport");

const {
  PlayerController,
  StaffController,
  CalendarController,
  NewsController,
  TeamController,
  RoleController,
  StaffAndRoleController,
  AuthController,
} = require("./controllers");

const router = express.Router();

router.post(
  "/auth/signup",
  passport.authenticate("local", { session: false }),
  AuthController.login
);
router.post(
  "/auth/login",
  passport.authenticate("local", { session: false }),
  AuthController.login
);
router.post(
  "/auth/admin",
  passport.authenticate("local", { session: false }),
  AuthController.loginAdmin
);
router.get("/admin", AuthController.browse);
router.get("/admin/:id", AuthController.read);
router.post("/admin", AuthController.signup);
// router.delete("/admin", AuthController.delete);
router.delete("/admin/:id", AuthController.delete);

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

router.get("/team", TeamController.browse);
router.get("/team/:id", TeamController.read);
router.put("/team/:id", TeamController.edit);
router.post("/team", TeamController.add);
router.delete("/team/:id", TeamController.delete);

module.exports = router;
