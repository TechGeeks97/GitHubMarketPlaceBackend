const mongoose = require("mongoose");
const foterSchema = new mongoose.Schema(
  {
    footer: {
      type: Object,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("FOOTER", foterSchema);
