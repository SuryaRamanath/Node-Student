require("dotenv").config({ path: "./.env" });
const express = require("express");
const path = require("path");
require("./connect/mongoose");

const StudentRouter = require("./Router/student");
const classRouter = require('./Router/class')
const societyRouter = require('./Router/society')

const app = express();
app.use(express.json());
app.use(StudentRouter);
app.use(classRouter);
app.use(societyRouter);

const port = process.env.PORT || 1000;

app.listen(port, "0.0.0.0", () => {
  console.log("Server is up on port " + port);
});
