const express = require("express");

const {
  ItemController,
  PlayerController,
  HistoryController,
} = require("./controllers");

const router = express.Router();

router.get("/players", PlayerController.browse);
router.get("/players/:id", PlayerController.read);
router.put("/players/:id", PlayerController.edit);
router.post("/players", PlayerController.add);
router.delete("/players/:id", PlayerController.delete);

router.get("/items", ItemController.browse);
router.get("/items/:id", ItemController.read);
router.put("/items/:id", ItemController.edit);
router.post("/items", ItemController.add);
router.delete("/items/:id", ItemController.delete);

router.get("/historys", HistoryController.browse);
router.get("/historys/:id", HistoryController.read);
router.put("/historys/:id", HistoryController.edit);
router.post("/historys", HistoryController.add);
router.delete("/historys/:id", HistoryController.delete);
module.exports = router;
