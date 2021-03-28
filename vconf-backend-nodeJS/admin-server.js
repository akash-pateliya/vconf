require("dotenv").config();
const express = require("express");
const cors = require("cors");
const authorizeUser = require("./authentication");

// routers
const routeAdmin = require("./routes/admin/admin");
const routeUsers = require("./routes/admin/users");
const routeVehicles = require("./routes/admin/vehicles");
const routeOrders = require("./routes/admin/orders");

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors("*"));
app.use(authorizeUser);

app.use("/admin", routeAdmin);
app.use("/users", routeUsers);
app.use("/vehicles", routeVehicles);
app.use("/orders", routeOrders);

app.listen(process.env.ADMIN_PORT, () => {
  console.log("Server started at port : " + process.env.ADMIN_PORT);
});
