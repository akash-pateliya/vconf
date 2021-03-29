require("dotenv").config();
const express = require("express");
const cors = require("cors");
const authorizeUser = require("./authentication");

// routers
const routeUser = require("./routes/portal/user");

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors("*"));
app.use(authorizeUser);

app.use("/user", routeUser);

app.listen(process.env.PORTAL_PORT, () => {
  console.log("Server started at port : " + process.env.PORTAL_PORT);
});
