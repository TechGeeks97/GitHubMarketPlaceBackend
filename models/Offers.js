const mongoose = require("mongoose");
const offersScehma = new mongoose.Schema(
  {
    item: {
      type: Object,
      required: true,
      trim: true,
    },

    price: {
      type: Number,
      required: true,
    },
    senderName: {
      type: String,
      required: true,
    },
    recieverName: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("OFFERS", offersScehma);
