const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json()); // VERY IMPORTANT

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  console.log(username, password); // for checking

  if (username === "admin" && password === "admin123") {
    res.json({ success: true, message: "Login successful" });
  } else {
    res.json({ success: false, message: "Login failed" });
  }
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
