const express = require("express");
const db = require("../../database");
const utils = require("../../utils");
const crypto = require("crypto-js");
const jwt = require("jsonwebtoken");
const config = require("../../config");

const router = express.Router();

router.get("/", (request, response) => {
    const statement =
        "select companyName, companyAddress, email, username, contactNo, status, createdOn from users";

    db.query(statement, (error, data) => {
        response.send(utils.createResult(error, data));
    });
});


router.put("/change-status/:id", (request, response) => {
    const id = request.params;
    const { status } = request.body;
    const statement = `update users set status = '${status}' where userID = ${id}`;

    db.query(statement, (error, data) => {
        response.send(utils.createResult(error, data));
    })
})


module.exports = router;
