const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());          
app.use(express.json());  

app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "admin" && password === "admin123") {
    res.json({ message: "Login successful" });
  } else {
    res.json({ message: "Invalid credentials" });
  }
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
