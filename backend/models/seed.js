const mongoose = require("mongoose");

const seedSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

// IMPORTANT FIX to avoid OverwriteModelError
module.exports =
  mongoose.models.Seed || mongoose.model("Seed", seedSchema);
