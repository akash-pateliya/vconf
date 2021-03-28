const express = require("express");
const db = require("../../database");
const utils = require("../../utils");

const router = express.Router();

router.get("/", (request, response) => {
    const statement = `select variants.variantName,
        segments.segmentName,
        manufacturers.manufacturerName,
        unitPrice
    from variants
        inner join segments on segments.segmentId = variants.segmentId
        inner join manufacturers on manufacturers.manufacturerId = variants.manufacturerId`;

    db.query(statement, (error, data) => {
        response.send(utils.createResult(error, data));
    });
});

router.post("/add-vehicle", (request, response) => {
    const { segmentName, manufacturerName, variantName, unitPrice } = request.body;
    const statement = `call addVehicles(?,?,?,?)`;

    db.query(statement, [segmentName, manufacturerName, variantName, unitPrice], (error, data) => {
        response.send(utils.createResult(error, data));
    });
})

router.delete("/:variantName", (request, response) => {
    const name = request.params.variantName;
    const statement = `delete from variants where variantName='${name}'`;

    db.query(statement, (error, data) => {
        response.send(utils.createResult(error, data));
    })
})
module.exports = router;
