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

// admin route //

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
router.get("/news/:id", NewsController.read);
router.put("/news/:id", NewsController.edit);
router.post("/news", NewsController.add);
router.delete("/news/:id", NewsController.delete);

// role route  //

router.get("/role/all/", StaffAndRoleController.browse);
router.get("/role", RoleController.browse);
router.get("/role/:id", RoleController.read);
router.put("/role/:id", RoleController.edit);
router.post("/role", RoleController.add);
router.delete("/role/:id", RoleController.delete);

// team route  //

router.get("/team", TeamController.browse);
router.get("/team/:id", TeamController.read);
router.put("/team/:id", TeamController.edit);
router.post("/team", TeamController.add);
router.delete("/team/:id", TeamController.delete);

module.exports = router;
