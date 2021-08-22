const mongoose = require("mongoose");

const classSchema = new mongoose.Schema(
  {
   
    Class: {
      type: String,
      required: true,
    },
    Society: [
      {
        society: {
          type: mongoose.Schema.Types.ObjectId,
          refer:'society'
        },
      },
    ],
    student: [
      {
        student: {
          type: mongoose.Schema.Types.ObjectId,
          refer:'student'
        },
      },
    ],
 
  },
  { collection: "class", timestamp: true }
);

const model = mongoose.model("classSchema", classSchema);

module.exports = model;
