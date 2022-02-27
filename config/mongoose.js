const mongoose = require("mongoose");

const URI =
  "mongodb+srv://root:4ph9XhkXMG9CTfRl@cluster0.lizib.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

//  "mongodb://localhost/api"

mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on("error", () => {
  console.log("mongodb error!");
});

db.once("open", () => {
  console.log("Atlas DB connected!");
});
