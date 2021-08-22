const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
    },
    Contact: {
      type: String,
      required: true,
    },
    Subjects: [
      {
        subject: {
          type: String,
          required: true,
        },
      },
    ],
    Classes: [
      {
        Class: {
          type: mongoose.Schema.Types.ObjectId,
          refer: "society",
          required: true,
        },
      },
    ],
    Society: [
      {
        society: {
          type: mongoose.Schema.Types.ObjectId,
          refer: "society",
        },
      },
    ],
    Year: {
      type: String,
      required: true,
    },
  },
  { collection: "Student", timestamp: true }
);

const model = mongoose.model("StudentSchema", StudentSchema);

module.exports = model;
