const express = require("express");
const router = express.Router();

const employee = require("./modules/employee");
const user = require("./modules/user");

router.use("/", employee);
router.use("/", user);
module.exports = router;
