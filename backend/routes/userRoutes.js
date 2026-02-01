const express = require("express");
const router = express.Router();
const User = require("../models/User");

//Create User
router.post("/create", async (req, res) => {
  try {
    console.log("BODY:", req.body);

    if (!req.body) {
      return res.status(400).json({ message: "Body not received" });
    }

    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "Email already exists" });
    }

    const newUser = await User.create({ username, email, password });

    res.status(201).json({
      message: "User created successfully",
      user: newUser,
    });
  } catch (error) {
    console.log("ERROR:", error.message);
    res.status(500).json({
      message: "Server Error",
      error: error.message,
    });
  }
});

//Get all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});

module.exports = router;
