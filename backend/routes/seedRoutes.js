const express = require("express");
const router = express.Router();

const {
  addSeed,
  getSeeds,
} = require("../controllers/seedController");

// routes
router.post("/add", addSeed);
router.get("/", getSeeds);

module.exports = router;
