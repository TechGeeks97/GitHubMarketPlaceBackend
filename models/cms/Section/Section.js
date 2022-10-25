const mongoose = require("mongoose");
const sectionSchema = new mongoose.Schema(
  {
    section: {
      type: Object,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("SECTION", sectionSchema);
