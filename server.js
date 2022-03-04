const express = require("express");
const cors = require("cors");
const app = express();
const passport = require("passport");
//Atuh
const user = require("./routes/modules/user.js");

const employee = require("./routes/modules/employee.js");
//Connect Database

require("./config/mongoose");

const PORT = process.env.PORT || 5000;
// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
app.use(cors());
app.use(express.json());

// settting main page route
app.get("/", (req, res) => {
  res.send("helso world");
});

app.use("/users", user);

app.use("/employees", employee);

// 設定應用程式監聽的埠號
app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});
