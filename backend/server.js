const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");   // make sure path is correct

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect MongoDB
connectDB();

// Test Route
app.get("/", (req, res) => {
  res.send("Backend Server Running Successfully!");
});

// User Routes
const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

// Port
const PORT = process.env.PORT || 5000;

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
