require("../model/model");
const controller = require("../controller/controller");

const express = require("express");

const router = express.Router();

router.post("/", controller.registerProduct);

router.get("/", controller.getAllHandler);

router.get("/:productID", controller.getSingleHandler);

router.delete("/:productID", controller.deleteHandler);

router.put("/:productID", controller.editHandler);


module.exports = router;