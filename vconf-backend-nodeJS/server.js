require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors("*"));

app.listen(process.env.PORTAL_PORT, () => {
  console.log("Server started at port : " + process.env.PORTAL_PORT);
});
