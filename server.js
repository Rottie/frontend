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

const PORT = process.env.PORT || 5000;
// 設定應用程式監聽的埠號
app.listen(PORT, () => {
  console.log(`App is runnsing on http://localhost:${PORT}`);
});
