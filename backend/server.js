const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// ✅ MUST middleware before routes
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// test
app.get("/", (req, res) => {
  res.send("API running...");
});

// routes
const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");
    app.listen(process.env.PORT || 5000, () =>
      console.log("✅ Server running on port 5000")
    );
  })
  .catch((err) => console.log("❌ MongoDB error:", err.message));
