const mongoose = require("mongoose");

const URI = process.env.MONGODB_URI || "mongodb://localhost/api";

mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on("error", () => {
  console.log("mongodb error!");
});

db.once("open", () => {
  console.log("Local DB connected!");
});
