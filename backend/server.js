const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Import model
const Plant = require("./models/plant");

// Connect MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log(" MongoDB Connected Successfully"))
  .catch((err) => console.log("MongoDB Connection Error:", err));

// Test Route
app.get("/", (req, res) => {
  res.send(" Plant API Running Successfully!");
});

// CREATE plant
app.post("/plants", async (req, res) => {
  try {
    const { name, type, price } = req.body;

    if (!name || !type || !price) {
      return res.status(400).json({ message: "All fields are required!" });
    }

    const newPlant = new Plant({ name, type, price });
    await newPlant.save();

    res.status(201).json({ message: "Plant Added Successfully", plant: newPlant });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
});

// READ all plants
app.get("/plants", async (req, res) => {
  try {
    const plants = await Plant.find();
    res.status(200).json(plants);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
});

//READ single plant by ID
app.get("/plants/:id", async (req, res) => {
  try {
    const plant = await Plant.findById(req.params.id);

    if (!plant) {
      return res.status(404).json({ message: "Plant Not Found" });
    }

    res.status(200).json(plant);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
});

// UPDATE plant
app.put("/plants/:id", async (req, res) => {
  try {
    const updatedPlant = await Plant.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!updatedPlant) {
      return res.status(404).json({ message: "Plant Not Found" });
    }

    res.status(200).json({ message: "Plant Updated Successfully", plant: updatedPlant });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
});

//DELETE plant
app.delete("/plants/:id", async (req, res) => {
  try {
    const deletedPlant = await Plant.findByIdAndDelete(req.params.id);

    if (!deletedPlant) {
      return res.status(404).json({ message: "Plant Not Found" });
    }

    res.status(200).json({ message: "Plant Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
});

// Server listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
