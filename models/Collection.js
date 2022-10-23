const mongoose = require("mongoose");
const collectionSchema = new mongoose.Schema(
  {
    categoryId: {
      type: mongoose.Schema.ObjectId,
      required: true,
    },

    name: {
      type: String,
      required: true,
      trim: true,
    },
    royalti: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    banner: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("COLLECTIONS", collectionSchema);
