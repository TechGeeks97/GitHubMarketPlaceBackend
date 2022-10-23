const mongoose = require("mongoose");
const navLogoSchema = new mongoose.Schema(
  {
    logo: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("NAVLOGO", navLogoSchema);
