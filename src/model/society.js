const mongoose = require("mongoose");

const societySchema = new mongoose.Schema(
  {
    society: {
      type: String,
    },
    student: [
      {
        student: {
          type: mongoose.Schema.Types.ObjectId,
          refer: "student",
        },
      },
    ],
  },
  { collection: "society", timestamp: true }
);

const model = mongoose.model("societySchema", societySchema);

module.exports = model;
