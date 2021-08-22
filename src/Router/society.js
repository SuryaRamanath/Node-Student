const express = require("express");
const Society = require("../model/society");
const router = new express.Router();

router.post("/api/create", async (req, res) => {
  const { society } = req.body;
  try {
    await Society.create({
      society,
    });
    return res.json({ status: "ok" });
  } catch (e) {
    return res.json({ status: "error", error: e });
  }
});

//adding student to society
router.post("/api/society/add-student", async (req, res) => {
  const { studentID, societyID } = req.body;
  try {
    await Society.findOneAndUpdate(
      { _id: societyID },
      {
        $push: {
          student: [
            {
              student: studentID,
            },
          ],
        },
      }
    );
    return res.json({ status: "ok" });
  } catch (e) {
    return res.json({ status: "error", error: e });
  }
});

module.exports = router;
