const express = require("express");
const Class = require("../model/class");
const router = new express.Router();

router.post("/api/create", async (req, res) => {
  const { className, society } = req.body;
  try {
    await Class.create({
        Class: className, society
    });
    return res.json({ status: "ok" });
  } catch (e) {
    return res.json({ status: "error", error: e });
  }
});


module.exports = router;
