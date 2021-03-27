const express = require("express");
const db = require("../../database");
const utils = require("../../utils");

const router = express.Router();

router.get("/", (request, response) => {
    const statement = `select * from orders`;

    db.query(statement, (error, data) => {
        response.send(utils.createResult(error, data));
    });
});

router.post("/order-details/:id", (request, response) => {
    const id = request.params.id;
    const statement = `SELECT A.orderId, C.username, D.variantName, B.unitPrice, B.quantity, B.tax, B.totalAmount, B.orderDate, B.orderTime FROM orders A, orderDetails B, users C, variants D where A.orderId = B.orderId and   A.userId = C.userId and D.variantId = B.variantId and B.orderId = ${id}`;

    db.query(statement, (error, data) => {
        response.send(utils.createResult(error, data));
    });
});


module.exports = router;
