const mongoose = require("mongoose");
const categorySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      required: true,
    },
    status: {
      type: String,

      default: "Active",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("CATEGORY", categorySchema);
