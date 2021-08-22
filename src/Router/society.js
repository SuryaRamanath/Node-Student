const express = require("express");
const Society = require("../model/society");
const router = new express.Router();

router.post("/api/create", async (req, res) => {
  const { society } = req.body;
  try {
    await Society.create({
      society
    });
    return res.json({ status: "ok" });
  } catch (e) {
    return res.json({ status: "error", error: e });
  }
});


module.exports = router;
