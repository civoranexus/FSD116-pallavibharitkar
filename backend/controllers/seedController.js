const Seed = require("../models/seed");

// ADD SEED
const addSeed = async (req, res) => {
  try {
    const seed = new Seed(req.body);
    await seed.save();
    res.status(201).json(seed);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET ALL SEEDS
const getSeeds = async (req, res) => {
  try {
    const seeds = await Seed.find();
    res.json(seeds);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  addSeed,
  getSeeds,
};
