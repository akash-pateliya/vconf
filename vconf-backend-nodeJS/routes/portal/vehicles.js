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

router.get("/getVariants/:segmentName/:manufacturerName", (request, response) => {
    const segmentName = request.params.segmentName;
    const manufacturerName = request.params.manufacturerName;

    const statement = `select variantName from variants, manufacturers, segments
	where variants.manufacturerId = manufacturers.manufacturerId
		and variants.segmentId = manufacturers.segmentId
        and manufacturers.segmentId = segments.segmentId
        and manufacturers.manufacturerName = '${manufacturerName}'
        and segments.segmentName = '${segmentName}'`;

    db.query(statement, (error, data) => {
        response.send(utils.createResult(error, data));
    })
})

module.exports = router;