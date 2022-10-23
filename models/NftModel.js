const mongoose = require("mongoose");
const nftSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      trim: true,
    },

    collectionId: {
      type: mongoose.Schema.ObjectId,
      required: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: String,
      required: true,
      trim: true,
    },
    img: {
      type: String,
      required: true,
    },

    isBuy: {
      type: Boolean,
    },
    status: {
      type: String,

      default: "Active",
    },
    likeCount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("NFTs", nftSchema);
