require("dotenv").config();
const express = require("express");
const cors = require("cors");

// routers
const routeAdmin = require("./routes/admin/admin");

const app = express();
app.use(express.json());
app.use(cors("*"));

app.use("/admin", routeAdmin);

app.listen(process.env.ADMIN_PORT, () => {
  console.log("Server started at port : " + process.env.ADMIN_PORT);
});
