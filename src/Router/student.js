const express = require("express");
const Student = require("../model/student");
const router = new express.Router();

router.post("/api/create", async (req, res) => {
  const { Name, Contact, Subjects, Classes, Society, Year } = req.body;
  try {
    await Student.create({
      Name,
      Contact,
      Subjects,
      Classes,
      Society,
      Year,
    });
    return res.json({ status: "ok" });
  } catch (e) {
    return res.json({ status: "error", error: e });
  }
});

router.post("/api/update/:id", async (req, res) => {
  const { Name, Contact, Subjects, Classes, Society, Year } = req.body;

  try {
    await Student.findOneAndUpdate(
      { _id: req.params.id },
      { $set: { Name, Contact, Subjects, Classes, Society, Year } }
    );
    return res.json({ status: "ok" });
  } catch (e) {
    return res.json({ status: "error", error: e });
  }
});


module.exports = router;
