const mongoose = require("mongoose");
const pouScehma = new mongoose.Schema(
  {
    picture: {
      type: String,
      required: true,
    },

    companyName: {
      type: String,
      required: true,
    },
    websiteUrl: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },

    revenueSharing: {
      type: String,
    },

    secondaryCommision: {
      type: String,
    },

    distributionFrequency: {
      type: String,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("POU", pouScehma);
