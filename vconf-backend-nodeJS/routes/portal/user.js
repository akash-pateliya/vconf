const express = require("express");
const db = require("../../database");
const crypto = require("crypto-js");
const jwt = require("jsonwebtoken");
const config = require("../../config");
const utils = require("../../utils");

const router = express.Router();

router.post("/signin", (request, response) => {
    const { email, password } = request.body;
    const encryptedPassword = crypto.SHA256(password);
    const statement = `select userId, username, status from users where email = '${email}' and password = '${encryptedPassword}'`;

    db.query(statement, (error, data) => {
        const result = {};

        if (error) {
            (result["status"] = "error"), (result["error"] = "sdssdserror");
        } else {
            if (data.length == 0) {
                (result["status"] = "error"),
                    (result["error"] = "Invalid Email or Password !!");
            } else {
                const user = data[0];

                if (user['status'] == 'active') {
                    const token = jwt.sign({ id: user["userId"] }, config.secret);
                    result["status"] = "success";
                    result["data"] = {
                        name: user['username'],
                        token: token,
                    };
                }
                else if (user['status'] == 'not-active') {

                    result["status"] = "error";
                    result['error'] = "Account is not Active"
                }
                else if (user['status'] == 'suspended') {
                    result["status"] = "error";
                    result['error'] = "Account is Suspended"
                }
                else if (user['status'] == 'block') {
                    result["status"] = "error";
                    result['error'] = "Account is Blocked"
                }
            }
        }
        response.send(result);
    });
});

router.post("/signup", (request, response) => {
    const { companyName, companyAddress, email, username, password, contactNo } = request.body;
    const encryptedPassword = crypto.SHA256(password);
    const statement = `insert into users (companyName, companyAddress, email, username, password, contactNo) values ('${companyName}', '${companyAddress}', '${email}', '${username}', '${encryptedPassword}', '${contactNo}')`;

    db.query(statement, (error, data) => {
        response.send(utils.createResult(error, data));
    })
})

module.exports = router;
