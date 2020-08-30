const express = require("express"),
  app = express(),
  port = process.env.PORT || 3000;

const auth = require("./routes/auth");
const user = require("./routes/user");
app.use(express.json());
//Import password
require("./configs/passport");

app.use("/auth", auth);
app.use("/user", passport.authenticate("jwt", { session: false }));
app.listen(port, console.log(`server start on ${port}`));
