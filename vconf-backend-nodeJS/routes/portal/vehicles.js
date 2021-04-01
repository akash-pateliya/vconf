const express = require("express");
const db = require("../../database");
const utils = require("../../utils");

const router = express.Router();

router.get("/getSegments", (request, response) => {
    const statement = `select segmentName from segments`;

    db.query(statement, (error, data) => {
        response.send(utils.createResult(error, data));
    })
})

router.get("/getManufacturers/:name", (request, response) => {
    const name = request.params.name;

    const statement = `select manufacturerName from manufacturers, segments where manufacturers.segmentId = segments.segmentId and segments.segmentName = '${name}'`;

    db.query(statement, (error, data) => {
        response.send(utils.createResult(error, data));
    })
})

router.get("/getVariants/:name", (request, response) => {
    const name = request.params.name;

    const statement = `select variantName from variants, manufacturers where manufacturers.manufacturerId = variants.variantId and manufacturers.manufacturerName = '${name}'`;

    db.query(statement, (error, data) => {
        response.send(utils.createResult(error, data));
    })
})

module.exports = router;