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
//adding student to class when a student select a particular class when registering
router.post("/api/class/add-student", async (req, res) => {
  const { studentID, classID} = req.body;
  try {
    await Class.findOneAndUpdate({_id:classID},{
      $push:{
        student:[{
          student:studentID
        }]
      }
        
    });
    return res.json({ status: "ok" });
  } catch (e) {
    return res.json({ status: "error", error: e });
  }
});

//adding cociety to class when selecting a particular society 
router.post("/api/class/add-society", async (req, res) => {
  const { societyID, classID} = req.body;
  try {
    await Class.findOneAndUpdate({_id:classID},{
      $push:{
        Society:[{
          society:societyID
        }]
      }
        
    });
    return res.json({ status: "ok" });
  } catch (e) {
    return res.json({ status: "error", error: e });
  }
});
//deleting student to class when a student deselect a particular class when registering
router.post("/api/class/delete-student", async (req, res) => {
  const { studentID, classID} = req.body;
  try {
    await Class.findOneAndUpdate({_id:classID},{
      $pull:{
        student:[{
          student:studentID
        }]
      }
        
    });
    return res.json({ status: "ok" });
  } catch (e) {
    return res.json({ status: "error", error: e });
  }
});
module.exports = router;
