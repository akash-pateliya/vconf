const express = require("express");
const db = require("../../database");
const utils = require("../../utils");
const fs = require("fs");
const multer = require('multer');
const upload = multer({ dest: 'images/' })

const router = express.Router();

router.get("/", (request, response) => {
    const statement = `select variants.variantName,
        segments.segmentName,
        manufacturers.manufacturerName,
        variants.imageName,
        unitPrice
    from variants
        inner join segments on segments.segmentId = variants.segmentId
        inner join manufacturers on manufacturers.manufacturerId = variants.manufacturerId`;

    db.query(statement, (error, data) => {
        response.send(utils.createResult(error, data));
    });
});

router.post("/add-vehicle", upload.single('image'), (request, response) => {
    const { segmentName, manufacturerName, variantName, unitPrice } = request.body;
    const statement = `call addVehicle(?,?,?,?,?)`;
    const imageName = request.file.filename;

    db.query(statement, [segmentName, manufacturerName, variantName, unitPrice, imageName], (error, data) => {
        response.send(utils.createResult(error, data));
    });
})

router.delete("/:variantName", (request, response) => {
    const name = request.params.variantName;
    const statement = `delete from variants where variantName='${name}'`;

    db.query(statement, (error, data) => {
        response.send(utils.createResult(error, data));
    })
});

router.get('/image/:imageName', (request, response) => {
    const imageName = request.params.imageName;
    const path = __dirname + '/../../images/' + imageName;
    const data = fs.readFileSync(path);
    response.send(data);
})

router.get("/getSegments", (request, response) => {
    const statement = `select segmentName from segments`;

    db.query(statement, (error, data) => {
        response.send(utils.createResult(error, data));
    })
})

router.get("/getManufacturers", (request, response) => {
    const statement = `select manufacturerName from manufacturers`;

    db.query(statement, (error, data) => {
        response.send(utils.createResult(error, data));
    })
})

module.exports = router;