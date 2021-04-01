require("dotenv").config();
const express = require("express");
const cors = require("cors");
const authorizeUser = require("./authentication");

// routers
const routeUser = require("./routes/portal/user");
const routeVehicles = require("./routes/portal/vehicles");

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors("*"));
app.use(authorizeUser);

app.use("/user", routeUser);
app.use("/vehicles", routeVehicles);

app.listen(process.env.PORTAL_PORT, () => {
  console.log("Server started at port : " + process.env.PORTAL_PORT);
});
