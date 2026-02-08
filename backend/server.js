const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const seedRoutes = require("./routes/seedRoutes");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/seeds", require("./routes/seedRoutes"));
app.use("/api/seeds", seedRoutes);

app.listen(process.env.PORT, () =>
  console.log("Server running on port " + process.env.PORT)
);
