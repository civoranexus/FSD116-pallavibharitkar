const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Temporary data store
let plants = [];

// Test route
app.get("/", (req, res) => {
  res.send("Backend is running");
});

// Login route
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "admin" && password === "1234") {
    res.json({ success: true, message: "Login successful" });
  } else {
    res.json({ success: false, message: "Invalid credentials" });
  }
});

//Add Plant API
app.post("/addPlant", (req, res) => {
  const { plantName, plantType, quantity } = req.body;

  if (!plantName || !plantType || !quantity) {
    return res.json({ success: false, message: "All fields are required" });
  }

  const newPlant = {
    id: plants.length + 1,
    plantName,
    plantType,
    quantity
  };

  plants.push(newPlant);

  res.json({ success: true, message: "Plant/Seed added successfully" });
});

//View Plant API
app.get("/plants", (req, res) => {
  res.json(plants);
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
