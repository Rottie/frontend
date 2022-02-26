const express = require("express");
const app = express();
const employee = require("./routes/modules/employee.js");
//Connect Database
require("./config/mongoose");

app.use(express.json());

// settting main page route
app.get("/", (req, res) => {
  res.send("hello world");
});
app.use("/employees", employee);
// setting port 3000
app.listen(5000, () => {
  console.log("App is running on http://localhost:5000");
});
