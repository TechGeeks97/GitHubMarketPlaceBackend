const mongoose = require("mongoose");
const sectionSchema = new mongoose.Schema(
  {
title: {
      type: String,
      required: true,
    },
    mainText: [
        {
     name:String,
     active:{
         type:Boolean,
         default:false
     }
    },
    

    ],
    mainText: [
        {
     name:String,
     active:{
         type:Boolean,
         default:false
     }
    },
    

    ]
  },
  { timestamps: true }
);
module.exports = mongoose.model("SECTION", sectionSchema);
