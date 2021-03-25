const express = require("express");
const db = require("../../database");
const crypto = require("crypto-js");
const jwt = require("jsonwebtoken");
const config = require("../../config");

const router = express.Router();

router.post("/signin", (request, response) => {
  const { email, password } = request.body;
  const encryptedPassword = crypto.SHA256(password);
  const statement = `select AdminID, firstName, lastName from admins where email = '${email}' and password = '${encryptedPassword}'`;

  db.query(statement, (error, data) => {
    const result = {};

    if (error) {
      (result["status"] = "error"), (result["error"] = error);
    } else {
      if (data.length == 0) {
        (result["status"] = "error"),
          (result["error"] = "Invalid Email or Password !!");
      } else {
        const user = data[0];
        const token = jwt.sign({ id: user["AdminID"] }, config.secret);
        result["status"] = "success";
        result["data"] = {
          name: user["firstName"] + " " + user["lastName"],
          token: token,
        };
      }
    }

    response.send(result);
  });
});

module.exports = router;
